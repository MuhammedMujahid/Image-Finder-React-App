import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const NavBar = () => {
  return (
    <MuiThemeProvider>
      <AppBar title="PixaBay Image Finder" />
    </MuiThemeProvider>
  );
};

export default NavBar;
