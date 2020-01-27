import React from "react";
import Home from "./Home Folder/Home";
import InfoFlag from "./Info-Flag Folder/InfoFlag"

function Main(props) {
    return (
        <div>

            {/* Passing the two functions from APP.js even further down to Home. */}
            <Home userClick={props.userClick} userInput={props.userInput}/>
            
            <InfoFlag />
        </div>
    )

}

export default Main;