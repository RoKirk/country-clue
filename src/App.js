import React, { Component } from "react";
import Axios from "axios";
import { Route } from "react-router-dom";
import './App.css';
import Header from "./Components/Header Folder/Header"
import Main from "./Components/Main Folder/Main"
import Footer from "./Components/Footer"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

    //Bind required here if no fat arrow is used on functions
    // this.userClick= this.userClick.bind(this)
  }

  //Fat arrow function "userInput=()=> {" vs regular function "userInput() {""
  userInput=()=> {
    console.log("User Input Did run.")
  }

  userClick = () => {
    //We console logged this function to check that it is working... the functioned is being utilized with the lower component that has use for it.
    console.log("Button was clicked.")
  }

  render() {
    return (
      <div className="App">
        <Header />
        
        {/* Sending the two functions as props to Main. ...Send them down to Main to send them down further to where they need to be.*/}
        <Main userClick={this.userClick} userInput={this.userInput}/>
        
        <Footer />
        {/* <Route exact path="/" component={Home, StaticHeader} /> */}

      
      </div>
    );
  }
}

export default App;
