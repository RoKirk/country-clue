import React from "react";


function SearchBar(props) {
    
    return (
        <div>
            {/* This is the input field function passed down from Parent 
            component {via & originated in App.js}. When a value is entered in the input... 
            the function is intiated "onChange". */}
            <input type="text" onChange={props.userInput}/>
        </div>
    )
    
}


export default SearchBar;
