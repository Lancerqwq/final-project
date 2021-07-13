import React from "react";
import { AppBar, Link as MuiLink, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    position: "static",
    display: "flex",
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    justifyContent: "flex-end",
    gap: 10,
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "inherit",
    textDecorationLine: "none",
  },
  footerCopy: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: " center",
  },
});

function MyFooterBar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.link}>
        <MuiLink color="inherit" component={Link} to="/#">
          Privacity
        </MuiLink>
        <MuiLink color="inherit" component={Link} to="/#">
          Therms
        </MuiLink>
      </Toolbar>
      <Toolbar className={classes.footerCopy}>
        <Link className={classes.logo} to="/book">
          BookShop
        </Link>
        <div>2021-2022 BookShop, Inc</div>
      </Toolbar>
      <Toolbar className={classes.link}>
        <MuiLink color="inherit" component={Link} to="/#">
          Support
        </MuiLink>
        <MuiLink color="inherit" component={Link} to="/#">
          Sign Up
        </MuiLink>
        <MuiLink color="inherit" component={Link} to="/#">
          Sign In
        </MuiLink>
      </Toolbar>
    </AppBar>
  );
}

export default MyFooterBar;
