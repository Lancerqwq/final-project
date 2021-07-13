import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import { useStyles } from "./styles";

function MyAppBar() {
  const classes = useStyles();
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
          Cart
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
