import React from "react";
import { NavLink } from "react-router-dom";


function SearchButton(props) {
    
    return (
        <div>
            {/* Inside of this button... props(function) are being sent down 
            and being utilized in the "button". When the button is clicked... 
            the function in "App.js" is initaited. */}
            <NavLink className="search-link-button" onClick={() => props.userClick(props.searchInput)} to="/results">Search</NavLink>
        </div>
    )

}


export default SearchButton;