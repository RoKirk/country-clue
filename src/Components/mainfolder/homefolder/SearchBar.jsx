import React from "react";

function SearchBar(props) {
    return (
        <div>
            {/* This is the input field function passed down from App.js. When a value is entered... the function is intiated. */}
            <input type="text" onChange={props.userInput}/>
        </div>
    )
    
}


export default SearchBar;
