import React from "react";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";


function Home(props) {

    return (
        <div className="home-components">
            {/* Passing these functions down to the components that are going to use them directly. */}
            <SearchBar userInput={props.userInput} searchInput={props.searchInput} />
            <SearchButton userClick={props.userClick} />
        </div>
    )

}


export default Home;