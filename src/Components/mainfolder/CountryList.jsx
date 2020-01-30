import React from 'react'
import { NavLink } from "react-router-dom";


function CountryList(props) {
    console.log(props.linkResults)
    return (
        <div >

            <div className='country-list-item-container'>
                {props.linkResults.map(function (countryListItem) {
                    return (
                          
                            <NavLink className='country-list-item' onClick={() => props.userClick(countryListItem.Name)} to='/results'>
                             {countryListItem.Name} 
                            </NavLink>
                    )
                })}
            </div>



            <NavLink onClick={props.backToDefault} to="/">Back</NavLink>

        </div>
    )

}


export default CountryList;
