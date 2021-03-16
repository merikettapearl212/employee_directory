import Card from "../components/Card";
import Header from "../components/Header";
import Container from "../components/Container"
import Search from "../components/Search";
import Filter from "../components/Filter"
// import testUsers from "../testdata.json";
import React, { Component } from "react";
import API from "../utils/API";


class OmdbContainer extends Component {
  state = {
    users: [],
    search: "",
    displayusers: []
};
  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
   
    this.getEmployees();
  }
  getEmployees() {
    API.getEmployees()
      .then((res) => {
        this.setState({ users: res.data.results })
        this.setState({ displayusers: res.data.results })
        
      })

      .catch((err) => console.log(err));
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.users);
    const result = this.state.users.filter(
      (user) =>
        user.name.first.toLowerCase().includes(this.state.search.toLowerCase()) ||
        user.name.last.toLowerCase().includes(this.state.search.toLowerCase())
    );
    this.setState({ displayusers: result });
//displyUsers 
    console.log(result);
    

  };
  

  sortAscending = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    const sortingAs = this.state.users.sort(
      (a, b) =>
      a.name.first.localeCompare(b.name.first)
    );
    this.setState({ displayusers: sortingAs });
    console.log(sortingAs)
  };

  sortDescending = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    const sortingDes = this.state.users.sort((a, b) =>
      b.name.first.localeCompare(a.name.first)
    );
    this.setState({ displayusers: sortingDes });
    console.log(sortingDes)
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
        />{" "}
        <Filter
          sortAscending={this.sortAscending}
          sortDescending={this.sortDescending}
        />
        <br />
        <Card users={this.state.displayusers} />
        </Container>
        </div>
    );
  }
}

export default OmdbContainer;