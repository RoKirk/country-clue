import React from "react";
import { Route } from "react-router-dom";
import StaticHeader from "./StaticHeader";
import DynamicHeader from "./DynamicHeader";

function Header(props) {
    return (
        <div>

            <Route exact path="/" component={StaticHeader} />

            <Route exact path="/results" component={() => (<DynamicHeader results={props.results}/>)} />



        </div>
    )

}

export default Header;