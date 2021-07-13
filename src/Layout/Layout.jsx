import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import MyAppBar from "../Components/Header/index";
import MyFooterBar from "../Components/Footer/index";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
  },
});

function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MyAppBar />
      {children}
      <MyFooterBar />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
