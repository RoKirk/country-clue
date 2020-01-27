import React from "react";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";

function Home(props) {
    return (
        <div>
            <h1>Hello from home</h1>
            <SearchBar userInput={props.userInput}/>
            <SearchButton userClick={props.userClick}/>
            </div>
    )
    
}


export default Home;