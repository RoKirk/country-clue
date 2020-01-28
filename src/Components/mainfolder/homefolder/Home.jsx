import React from "react";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";


function Home(props) {
    
    return (
        <div>
            {/* Passing these functions down to the components that are going to use them directly. */}
            <SearchBar userInput={props.userInput}/>
            <SearchButton userClick={props.userClick} />
        </div>
    )
    
}


export default Home;