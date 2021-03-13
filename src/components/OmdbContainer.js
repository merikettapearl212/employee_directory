import Body from "../components/Body";
import Header from "../components/Header";
import Container from "./Container";
import Search from "../components/Search";
import testUsers from "../testdata.json";
import React, { Component } from "react";
import API from "../utils/API";


class OmdbContainer extends Component {
  state = {
    users: [],
    search: ""
  
};
  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    API.getUsers()
      .then(res => this.setState({ users: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.getUsers(this.state.search);
  };

render() {
    return (
      <Container>
        <Header />
        <Body users={this.state.users} />
            <Search
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
      </Container>
    );
  }
}

export default OmdbContainer;
