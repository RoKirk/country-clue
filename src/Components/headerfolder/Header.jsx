import React from "react";
import { Route } from "react-router-dom";
import StaticHeader from "./StaticHeader";
import DynamicHeader from "./DynamicHeader";


function Header(props) {
    
    return (
        <div className='header'>

            {/* ***In here... I referenced 2 routes to 2 different components.
            *** Also, in the second Route("/results"), I'm passing results to 
            the respective component that I'm setting the route to. */}

            <Route exact path="/" component={StaticHeader} />

            <Route exact path="/results" component={() => (<DynamicHeader results={props.results} />)} />
        
        </div>
    )

}


export default Header;