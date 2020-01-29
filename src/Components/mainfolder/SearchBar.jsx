import React from "react";


function SearchBar(props) {

    return (
        <div>
            {/* This is the input field function passed down from Parent 
            component {via & originated in App.js}. When a value is entered in the input... 
            the function is intiated "onChange". */}
            <input className= "input-field" onSubmit={() => props.history.push(props.searchInput)} type="text" value={props.searchInput} onChange={props.userInput} />
        </div>
    )

}


export default SearchBar;
