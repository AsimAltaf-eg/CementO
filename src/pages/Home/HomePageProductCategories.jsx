import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const useStyles = makeStyles({
  root: {


    maxWidth: 345,
    borderRadius: 16,
    margin: '16px',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
    boxShadow: '0 8px 16px -8px rgba(0,0,0,0.4)',
    backgroundColor: '#f7f7f7',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '30px 10px 0 100px',
  },
  media: {
    height: 240,
    borderRadius: 16,
    objectFit: 'cover',
    width: '100%',
    maxHeight: 240,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
  },
  content: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  title: {
    fontSize: '18px',
    marginBottom: '8px',
    textAlign: 'center',
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: '24px',
  },
  // new CSS class for the container
  productContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
    // set four columns on desktop
    '@media (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
});

const ProductCategoriesCard = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}
    >
      <CardActionArea component="a" href={`/products/searchbycategory/${product.id}`}>
     
        <CardMedia
          className={classes.media}
          component="img"
          image={`http://127.0.0.1:8000/${product?.image}`}
          title={product.title}
        />
        <CardContent className={classes.content}>
          <Typography className={`${classes.title} ${classes.productTitle}`} gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const ProductCategoriesList = () => {
  const [products, setProducts] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://127.0.0.1:8000/product-inventory/Category-list/');
      console.log("Product Categories",response.data);
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <div className={classes.productContainer}>
      {products.map((product) => (
        <ProductCategoriesCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCategoriesList;
