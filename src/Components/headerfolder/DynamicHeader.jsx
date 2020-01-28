import React from "react";
import { Route } from "react-router-dom";


//Needs a function that inserts the "Native Name" [data] as the Header in the Home route.
function DynamicHeader(props) {
    return (
        <div>
            {/* <Route className="dynamic-route" exact path="/:id" component={DynamicHeader} /> */}

            <div className="dynamic-header">
                {props.results && props.results[0].NativeName}
                <h1>I'm Smart</h1>
            </div>

        </div>

        )
    
}


export default DynamicHeader;