import React from "react";
import DynamicBackground from "./DynamicBackground";
import Info from "./Info";
import { NavLink } from "react-router-dom";

function InfoFlag(props) {
    return (
        <div>
            <Info results={props.results} />
            <NavLink to="/">Back</NavLink>
            {/* <DynamicBackground results={props.results && props.results[0].Flag}/> */}
        </div>
    )

}

export default InfoFlag;