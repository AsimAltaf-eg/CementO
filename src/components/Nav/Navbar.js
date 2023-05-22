import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import StoreIcon from "@mui/icons-material/Store";
import { useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Cart from "../../components/Cart/Cart";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import CalculateIcon from "@mui/icons-material/Calculate";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import CompareIcon from "@mui/icons-material/Compare";

import SellIcon from '@mui/icons-material/Sell';
import logo from "./png.jpg";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)", // Change the background color here
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
  },
  button: {
    color: "#ffffff",
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: theme.palette.background.paper,
  },
  logo: {
    maxHeight: "80px",
    paddingRight: theme.spacing(1),
  },
}));
function App() {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
 

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {openDrawer ? (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="close"
              onClick={handleDrawerClose}
            >
              <CloseIcon />
            </IconButton>
          ) : (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography variant="h6" className={classes.title}>
            <Link to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "#ffffff",
            }}
            >
              {/* Add the logo image here with proper styling */}
              <img
              style={{
                width: "60px",
                height: "50px",
                borderRadius: "50%",
              }}
               src={logo} alt="CementO Logo" className={classes.logo} />
              CementO
            </Link>
          </Typography>
          <Link to="/login" className={classes.link}>
            <Button color="inherit" className={classes.button}>
              <LoginIcon /> Login
            </Button>
          </Link>

          <Link to="/main_register" className={classes.link}>
            <Button color="inherit" className={classes.button}>
              <StoreIcon /> Account Signup
            </Button>
          </Link>

          <Link onClick={() => setOpen(!open)} className={classes.link}>
            <Button color="inherit" className={classes.button}>
              <ShoppingCartOutlinedIcon />
              Cart {products.length}
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      {open && <Cart />}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={openDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar>
          <IconButton onClick={handleDrawerClose}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <div className={classes.drawerContainer}>
          <List>
            <Link to={`/ImageSearch`} className={classes.link}>
              <ListItem button key="ImageSearch">
                <ListItemIcon>
                  <ImageSearchIcon />
                </ListItemIcon>
                <ListItemText primary="VisualSearch" />
              </ListItem>
            </Link>

            <Link to={`/RoomVisualizer`} className={classes.link}>
              <ListItem button key="Room Visualizer">
                <ListItemIcon>
                  <CompareIcon />
                </ListItemIcon>
                <ListItemText primary="Room Visualizer" />
              </ListItem>
            </Link>

            <Link to={`/CostEstimator/TileCalculate`} className={classes.link}>
              <ListItem button key="tiles Cost Estimator">
                <ListItemIcon>
                  <CalculateIcon />
                </ListItemIcon>
                <ListItemText primary="Tiles CostEstimator" />
              </ListItem>
            </Link>

            <Link
              to={`/CostEstimator/BricksCalculate`}
              className={classes.link}
            >
              <ListItem button key="brick Cost Estimator">
                <ListItemIcon>
                  <CalculateIcon />
                </ListItemIcon>
                <ListItemText primary="Brick CostEstimator" />
              </ListItem>
            </Link>
          </List>

          <Link to={`/LocationMap`} className={classes.link}>
            <ListItem button key="LocationMap">
              <ListItemIcon>
                <LocationSearchingIcon />
              </ListItemIcon>
              <ListItemText primary="Location Store" />
            </ListItem>
          </Link>


          <Link to={`/ListShopvendor`} className={classes.link}>
            <ListItem button key="List Shop vendor">
              <ListItemIcon>
              <SellIcon /> 
              </ListItemIcon>
              <ListItemText primary="Shop vendors" />
            </ListItem>
          </Link>





        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Container maxWidth="lg"></Container>
      </main>
    </div>
  );
}

export default App;
