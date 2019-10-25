import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";

import LinkFarm from "./LinkFarm";

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {"Copyright © "} {new Date().getFullYear()}
      {", "}
      Bryan Brinson
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    // padding: theme.spacing(2),
    marginTop: "auto",
    // backgroundColor: "white"
    color: "white"
  },
  border: {
    height: "25px",
    width: "100%",
    "background-color": "black"
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.border}></div>
      <AppBar position="static">
        <Box textAlign="center" maxWidth="sm">
          <LinkFarm />
        </Box>
        <Box textAlign="center" maxWidth="sm">
          <Typography variant="body1"></Typography>
          <Copyright />
        </Box>
      </AppBar>


    </footer>
  );
};

export default Footer;
