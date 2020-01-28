import React from "react";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
// import { Route } from "react-router-dom";


function Home(props) {
    
    return (
        <div>
            {/* <Route exact path="/" component={Home} /> */}

            <h1>Hello from home</h1>
            {/* Passing these functions down to the components that are going to use them directly. */}
            <SearchBar userInput={props.userInput}/>
            <SearchButton userClick={props.userClick} />
        </div>
    )
    
}


export default Home;