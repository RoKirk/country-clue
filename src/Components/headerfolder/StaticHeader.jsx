import React from "react";
// import { Route } from "react-router-dom";



function StaticHeader() {
    return (
        //See Footer for formula.
        <div className="static-header">
            {/* <Route className="home-route" exact path="/" component={StaticHeader} /> */}
            {/* <Route exact path="/" component={StaticHeader} /> */}
            <style>
                @import url('https://fonts.googleapis.com/css?family=Anton|Bangers|Bowlby+One+SC|Cinzel|Josefin+Sans|Lobster|Luckiest+Guy|Montserrat|Righteous|Sigmar+One&display=swap');
            </style>
            <h1>Country Clue</h1>
        </div>
    )
    
}

export default StaticHeader;