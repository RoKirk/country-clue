import React, { Component } from "react";
import Axios from "axios";
import { Route } from "react-router-dom";
import "normalize.css"
import './App.css';
import Header from "./Components/headerfolder/Header"
import Home from "./Components/mainfolder/searchfeaturesfolder/Home";
import InfoFlag from "./Components/mainfolder/InfoFlag";
import Footer from "./Components/Footer"


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchInput: "",
      results: null
    }

    //Bind required here if no fat arrow is used on functions
    // this.userClick= this.userClick.bind(this)
  }

  apiCall = async () => {
    const country = this.state.searchInput
    const queryString = `http://countryapi.gear.host/v1/Country/getCountries?pName=${country}`

    try {
      const response = await Axios.get(queryString);
      this.setState({
        results: response.data.Response
      })
      // console.log(response)
    }
    catch (error) {
      console.log(error)
    }
  }

  // ***These functions are her because they affect State.*** */
  //Fat arrow function "userInput=()=> {" vs regular function "userInput() {""

  userClick = (event) => {
    this.apiCall()
    //We console logged this function to check that it is working... the functioned is being utilized with the lower component that has use for it.
    console.log("Button was clicked.")
  }

  userInput = (event) => {
    event.preventDefault()
    console.log("Inputting")
    console.log(event.target.value)
    this.setState({
      searchInput: event.target.value,
    }
    )
  }

  render() {
    return (
      <div className="App">
        <Header results={this.state.results} />


        {/* Sending the two functions as props to Home. ...Send them down to Home to send them down further to where they need to be.*/}
        <Home userClick={this.userClick} userInput={this.userInput} />

        
        <Route exact path="/" component={() => (<div></div>)} />

        <Route exact path="/results" component={() => (<div><InfoFlag results={this.state.results} /></div>)} />

        
        <Footer />

      </div>
    );
  }
}


export default App;
