import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import { Header } from "./components/Header";
import { UserCard } from "./components/UserCard";

//make APP a class based component
export default class App extends Component {
  //set up state
  state = {
    //data for a given users github
    userData: {},
    //data for that users github followers
    followersData: [],
    //initial state for user (my account first)
    username: "krisf451",
    //local state to track the search input
    input: ""
  };

  //fetch data from the github API for current user data (default is my personal github)
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then(res => {
        // console.log(res.data);
        //set the data for github user: username to state
        this.setState({
          userData: res.data
        });
      })
      .catch(err => {
        console.log(err.message);
      });
    //fetch data from the github API for my FOLLOWERS DATA
    // axios
    //   .get(`https://api.github.com/users/${this.state.username}/followers`)
    //   .then(res => {
    //     console.log(res.data);
    //     this.setState({
    //       followersData: res.data
    //     });
    //   })
    //   .catch(err => {
    //     console.log(err.message);
    //   });
  }
  // handleSubmit = e => {
  //   e.preventDefault();
  //   axios
  //     .get(`https://api.github.com/users/${this.state.username}`)
  //     .then(res => {
  //       this.setState({
  //         ...this.state,
  //         userData: res.data,
  //         input: ""
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  //   //fetch data from the github API for inputed users DATA
  //   axios
  //     .get(`https://api.github.com/users/${this.state.username}/followers`)
  //     .then(res => {
  //       this.setState({
  //         ...this.state,
  //         followersData: res.data
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main_container">
          <UserCard userData={this.state.userData} />
        </div>
      </div>
    );
  }
}
