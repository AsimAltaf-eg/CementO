import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Avatar } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom: theme.spacing(4),
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    maxWidth: '320px',
    width: '100%',
    margin: theme.spacing(2),
  },
  content: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    wordWrap: 'break-word',
  },
  // avatar: {
  //   width: theme.spacing(8),
  //   height: theme.spacing(8),
  //   marginRight: theme.spacing(2),
  // },
}));

const Shop = ({ Sid, name, phone, address, logoUrl }) => {
  const classes = useStyles();

  const shortAddress = address.substring(0, 30);
  const longAddress = address.substring(30);

  return (
    <Card className={classes.root}>
      <CardActionArea component="a" href={`/products/searchbyshopvendor/${Sid}`}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* <Avatar className={classes.avatar} alt={name} src={logoUrl} /> */}
          <div className={classes.content}>
            <Typography variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {shortAddress}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {longAddress}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Phone: {phone}
            </Typography>
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default Shop;
