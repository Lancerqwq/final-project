import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    position: "static",
    display: "flex",
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "inherit",
    textDecorationLine: "none",
  },
  wrap: {
    justifyContent: "flex-end",
    gap: 10,
  },
  link: {
    fontSize: 18,
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  selected: {
    fontWeight: "bold",
    color: "#ff4d40",
  },
});

function MyAppBar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Link className={classes.logo} to="/book">
          BookShop
        </Link>
      </Toolbar>
      <Toolbar className={classes.wrap}>
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
