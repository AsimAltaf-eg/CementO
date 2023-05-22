import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '1vh',
  },
  paper: {
    padding: theme.spacing(3),
    maxWidth: 400,
    textAlign: 'center',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: 'blue', /* blue */
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#3e8e41', /* Dark green */
    },
},
}));

function OrderDelivery() {

  let navigate = useNavigate(); // Navigator

  const classes = useStyles();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!name || !address || !phone || !email || !comments) {
      alert('Please fill out all fields before placing your order.');
    } else {
      // place order logic here
      navigate("/placed-order");
      console.log('Order placed!');
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <h5>Shipping information</h5>
        <form>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            className={classes.textField}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            className={classes.textField}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            className={classes.textField}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            className={classes.textField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Comments"
            variant="outlined"
            fullWidth
            className={classes.textField}
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />


       
   
          
          
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.button}
            onClick={handlePlaceOrder}
          >
            Place Order
          </Button>
         
           

        </form>
      </Paper>
    </div>
  );
}

export default OrderDelivery;
