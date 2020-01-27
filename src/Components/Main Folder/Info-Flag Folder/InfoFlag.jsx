import React from "react";
import DynamicBackground from "./DynamicBackground";
import Info from "./Info";

function InfoFlag(props) {
    return (
        <div>
            <h1>Hello, I'm InfoFlag</h1>
            <Info />
            <DynamicBackground />
        </div>
    )
    
}

export default InfoFlag;