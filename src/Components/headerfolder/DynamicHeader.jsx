import React from "react";


//Needs a function that inserts the "Native Name" [data] as the Header in the "/results" route.
function DynamicHeader(props) {

    return (
        <div className="dynamic-header">
            <h1>{props.results && props.results[0].NativeName}</h1>
            <h2>{props.results && props.results[0].Name}</h2>
        </div>
    )

}


export default DynamicHeader;