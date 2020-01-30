import React from 'react'
import { NavLink } from "react-router-dom";


function CountryList(props) {
    console.log(props.linkResults)
    return (
        <div>
            {props.linkResults.map(function (countryListItem) {
                return (
                    <NavLink onClick={() => props.userClick(countryListItem.Name)} to='/results'>
                        <div className='country-list-item'> {countryListItem.Name} </div>
                    </NavLink>
                )
            })}



            <NavLink onClick={props.backToDefault} to="/">Back</NavLink>

        </div>
    )

}


export default CountryList;
