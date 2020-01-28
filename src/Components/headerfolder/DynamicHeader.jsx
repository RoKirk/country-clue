import React from "react";
import { Route } from "react-router-dom";


//Needs a function that inserts the "Native Name" [data] as the Header in the Home route.
function DynamicHeader(props) {
    return (
        <div>
            {/* <Route className="dynamic-route" exact path="/:id" component={DynamicHeader} /> */}

            <div className="dynamic-header">
                <h1>{props.results && props.results[0].NativeName}</h1>
                <h2>{props.results && props.results[0].Name}</h2>

            </div>

        </div>

        )
    
}
console.log(DynamicHeader)



export default DynamicHeader;