import React from "react";
import DynamicBackground from "./DynamicBackground";
import Info from "./Info";

function InfoFlag(props) {
    return (
        <div>
            <h1>Hello, I'm InfoFlag</h1>
            <Info results={props.results}/>
            {/* <DynamicBackground results={props.results && props.results[0].Flag}/> */}
            
        </div>
    )
    
}

export default InfoFlag;