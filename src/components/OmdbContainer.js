import Card from "../components/Card";
import Header from "../components/Header";
import Container from "../components/Container"
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
    this.getEmployees();
  }

  getEmployees() {
    API.getEmployees()
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
      <div>
            <Header backgroundImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/>
            <Container>
                <Search
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                <Card users={this.state.users} />
                    
              </Container>
      </div>
    );
  }
}

export default OmdbContainer;