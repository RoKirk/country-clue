import React from "react";
import { NavLink } from "react-router-dom";


function SearchButton(props) {
    
    return (
        <div>
            {/* Inside of this button... props(function) are being sent down 
            and being utilized in the "button". When the button is clicked... 
            the function in "App.js" is initaited. */}
            {/* <button onClick={props.userClick}>Search</button> */}
            <NavLink onClick={props.userClick} to="/results">Search</NavLink>
        </div>
    )

}


export default SearchButton;