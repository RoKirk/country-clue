import React, { Component } from "react";
import Axios from "axios";
import { Route, NavLink } from "react-router-dom";
import "normalize.css"
import './App.css';
import Header from "./Components/headerfolder/Header"
import Home from "./Components/mainfolder/Home";
import CountryInfoData from "./Components/mainfolder/CountryInfoData";
import Footer from "./Components/Footer"
import defaultBackground from "./World_Atlas.jpg"
import CountryList from "./Components/mainfolder/CountryList";
// import ReactMapGL from 'react-map-gl'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchInput: "",
      results: null,
      backgroundImage: defaultBackground,
      linkResults: []
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
        results: response.data.Response,
        backgroundImage: response.data.Response[0].Flag
      })
      // console.log(response)
    }
    catch (error) {
      console.log(error)
    }
    console.log(country)
  }

  apiCallForLinks = async (region) => {
    const queryString = `http://countryapi.gear.host/v1/Country/getCountries?pRegion=${region}`

    try {
      const response = await Axios.get(queryString);
      this.setState({
        linkResults: response.data.Response,
      })
      console.log(response)
    }
    catch (error) {
      console.log(error)
    }
  }
  // ***These functions are her because they affect State.*** */
  //Fat arrow function "userInput=()=> {" vs regular function "userInput() {""

  userClick = (name) => {
    this.setState({
      searchInput: name
    }, () => {
        this.apiCall()
        this.clearSearch()
    })

    // this.setState({
    //   searchInput: ''
    // })
    //We console logged this function to check that it is working... the functioned is being utilized with the lower component that has use for it.
    console.log("Button was clicked.")
  }

  userInput = (event) => {
    event.preventDefault()
    // console.log("Inputting")
    console.log(event.target.value)
    this.setState({
      searchInput: event.target.value,
    }
    )
  }

  clearSearch = () => {
    this.setState({
      searchInput: ""
    })
  }


  backToDefault = (e) => {
    this.setState({
      backgroundImage: defaultBackground,

    })
    console.log("Back to Home");
    this.clearSearch()
  }


  render() {
    return (
      <div className="App" style={{ backgroundImage: `url(${this.state.backgroundImage})` }}>

        <Header results={this.state.results} />


        {/* Sending the two functions as props to Home...
        Send them down to Home to send them down further to where they need to be.*/}
        <Home userClick={this.userClick} userInput={this.userInput} searchInput={this.state.searchInput} />




        <Route exact path="/">
          <div className="homepage-links">
          <span><NavLink onClick={() => { this.apiCallForLinks("Africa") }} to="/list">Africa</NavLink></span>
          <span><NavLink onClick={() => { this.apiCallForLinks("Americas") }} to="/list">Americas</NavLink></span>
          <span><NavLink onClick={() => { this.apiCallForLinks("Asia") }} to="/list">Asia</NavLink></span>
          <span><NavLink onClick={() => { this.apiCallForLinks("Europe") }} to="/list">Europe</NavLink></span>
          <span><NavLink onClick={() => { this.apiCallForLinks("Ocenia") }} to="/list">Ocenia</NavLink></span>
          <span><NavLink onClick={() => { this.apiCallForLinks("Polar") }} to="/list">Polar</NavLink></span>
        </div>
        </Route>

        <Route exact path="/results" component={() => (<div><CountryInfoData results={this.state.results} backToDefault={this.backToDefault} /></div>)} />

        <Route exact path="/list" component={() => (<div><CountryList userClick={this.userClick} linkResults={this.state.linkResults} backToDefault={this.backToDefault} /></div>)} />

        <Footer />

      </div>
    );
  }
}


export default App;
