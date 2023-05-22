import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Shop from './ShopsList';


const useStyles = makeStyles((theme) => ({
    gridContainer: {
      flexGrow: 1,
      margin: theme.spacing(1),
    },
  }));


const ShopPage = () => {
    const classes = useStyles();

  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchShops = async () => {
      const response = await fetch('http://127.0.0.1:8000/shopvendorlist/');
      const data = await response.json();
      setShops(data);
    };
    fetchShops();
  }, []);

  return (


    <Grid container spacing={3} className={classes.gridContainer}>
      {shops.map((shop) => (
        <Shop
          key={shop.user}
          Sid = {shop.user}
          name={shop.Business_name}
          phone={shop.Business_phone}
          address={shop.Business_address}
          logoUrl={shop.logoUrl}
        />
      ))}
    </Grid>

  
  );
};

export default ShopPage;
