import React, { Component } from "react";
import TextField from "material-ui/TextField";

class Search extends Component {
  state = {
    searchText: "",
    amount: 15,
    apiUrl: "https://pixabay.com/api",
    apiKey: "11029406-6d560981c7af61d948ff50bb9",
    images: []
  };
  render() {
    return (
      <TextField
        name="searchText"
        value={this.state.searchText}
        floatingLabelText="Search for Images"
        fullWidth="true"
        onChange={this.onChange}
      />
    );
  }
}

export default Search;
