import React ,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, Link, Button } from '@material-ui/core';
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import Axios from "axios";
import { getToken } from "../../services/LocalStorageService.js";
import { removeToken } from "../../services/LocalStorageService.js";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
  tableCell: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginRight: theme.spacing(2),
  },
  checkoutBtn: {
    marginTop: theme.spacing(2),
  },
}));

const OrderCart = () => {
    let navigate = useNavigate(); // Navigator
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();
  
    const [processing, setProcessing] = useState(false); // Add processing state
  
  

    const config = {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      };

    const handlePayment = async () => {
        try {
          if (processing) return; // Check if payment is already being processed
          setProcessing(true); // Set processing state to true
          console.log("customer order product:", products);
    
          const res = await Axios.post(
            "http://127.0.0.1:8000/order/CreateProductOrder/",
            {
              products,
            },
            config
          );
    
          alert("Thank you for shopping CementO. Your order is confirmed.");
          dispatch(resetCart());
        } catch (error) {
          console.log(error);
          if (error.response.status === 400) {
            alert("Error: Bad Request" + error.message);
          } else if (error.response.status === 401) {
            alert("If you already have an account, please log in. Otherwise, please register on the website." );
            removeToken();
            navigate("/login");
          } else if (error.response.status === 500) {
            alert("Backend server error :" + error.message);
          } else {
            alert("Some other error Occured : " + error.message);
          }
        } finally {
          setProcessing(false); // Reset processing state to false
        }
      };
    


  const classes = useStyles();

  const totalBill = products.reduce((acc, product) => acc + product.totalbill, 0);

  return (
    <Card className={classes.root}>
      <Typography variant="h5" className={classes.title}>Cart</Typography>
      <CardContent>
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Price</TableCell>
                {/* <TableCell align="center">Color</TableCell> */}
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Subtotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className={classes.tableCell}>
                    <Link href={`/product/${product.id}`}>
                      <Avatar alt={product.name} src={product.img} className={classes.avatar} />
                    </Link>
                  </TableCell>
                  <TableCell align="center" >{product.id}</TableCell>
                  <TableCell align="center" >
                    <Link href={`/product/${product.id}`}>
                      {product.title}
                    </Link>
                  </TableCell>
                  <TableCell align="center" >${product.price}</TableCell>
                  {/* <TableCell align="center" >{product.color}</TableCell> */}
                  <TableCell align="center" >{product.quantity}</TableCell>
                  <TableCell align="center" >${product.totalbill}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={5} align="right">Total Bill:</TableCell>
                <TableCell align="center">${totalBill}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        {/* <Button variant="contained" color="primary" className={classes.checkoutBtn}>Checkout</Button> */}

        {products.length > 0 ? (
        <Button variant="contained" color="primary" className={classes.checkoutBtn} onClick={handlePayment} disabled={processing}>PROCEED TO ORDER</Button>
      ) : null}


      </CardContent>
    </Card>
  );
};

export default OrderCart;
