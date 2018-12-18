import React, { Component } from "react";
import NavBar from "./components/navbar/navbar";
import Search from "./components/search/search";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./App.css";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <NavBar />
        <Search />
      </MuiThemeProvider>
    );
  }
}

export default App;
