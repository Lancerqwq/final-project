import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useStyles } from "./styles";

function MyAppBar() {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Link className={classes.logo} to="/books">
          BookShop
        </Link>
      </Toolbar>
      <Toolbar className={classes.wrap}>
        <NavLink
          className={classes.link}
          activeClassName={classes.selected}
          exact
          to="/books"
        >
          Home
        </NavLink>
        <NavLink
          className={classes.link}
          activeClassName={classes.selected}
          exact
          to="/contacts"
        >
          Contacts
        </NavLink>
        <NavLink
          className={classes.link}
          activeClassName={classes.selected}
          exact
          to="/cart"
        >
          {cart.length > 0 ? `Cart (${cart.length})` : "Cart"}
        </NavLink>
        <NavLink
          className={classes.link}
          activeClassName={classes.selected}
          exact
          to="/login"
        >
          Login
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;
