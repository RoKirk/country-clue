import React from "react";
import { Route } from "react-router-dom";
import StaticHeader from "./StaticHeader";
import DynamicHeader from "./DynamicHeader";

function Header(props) {
    return (
            <div>
                <StaticHeader />
                <DynamicHeader/>
            </div>
        )
    
}

export default Header;