import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import tile from "./tile.png";
import brick from "./brick.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    maxHeight: 245,
    maxWidth: 245,
    marginTop: "20%",
    boxShadow: theme.shadows[5],
    borderRadius: theme.shape.borderRadius,
  },
  media: {
    height: 100,
    width: 245,
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
  },
  description: {
    fontSize: "1rem",
  },
}));

export default function CenteredCards() {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Link to={`/CostEstimator/TileCalculate`} style={{ textDecoration: 'none' }}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={tile}
                title="Category 1"
              />
              <CardContent>
                <Typography className={classes.title} component="h2">
                  Calculate the Number of Tiles
                </Typography>
                <Typography className={classes.description} color="textSecondary" component="p">
                  Calculate how many tiles you need for a room, floor, or wall.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Link to={`/CostEstimator/BricksCalculate`} style={{ textDecoration: 'none' }}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={brick}
                title="Category 2"
              />
              <CardContent>
                <Typography className={classes.title} component="h2">
                  Calculate the Number of Bricks
                </Typography>
                <Typography className={classes.description} color="textSecondary" component="p">
                  Calculate how many bricks you need for a wall.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    </Grid>
  );
}
