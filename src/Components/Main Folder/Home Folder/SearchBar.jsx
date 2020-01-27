import React from "react";

function SearchBar(props) {
    return (
        <div>
            <input type="text" onChange={props.userInput}/>
        </div>
    )
    
}


export default SearchBar;
