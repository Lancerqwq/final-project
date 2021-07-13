import React from "react";
import { AppBar, Link as MuiLink, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";

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
        <span>2021-2022 BookShop, Inc</span>
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
