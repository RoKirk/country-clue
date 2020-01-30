import React from "react";
import { NavLink } from "react-router-dom";


function CountryInfoData(props) {
    return (
        <div className="data-box">
            <div><span>Region: </span> {props.results && props.results[0].Region}</div>
            <div><span>Sub-Region: </span> {props.results && props.results[0].SubRegion}</div>
            <div><span>Latitude: </span> {props.results && props.results[0].Latitude}</div>
            <div><span>Longitude: </span>{props.results && props.results[0].Longitude}</div>
            <div><span>Native Language: </span>{props.results && props.results[0].NativeLanguage}</div>
            <div><span>Currency Code: </span>{props.results && props.results[0].CurrencyCode}</div>
            <div><span>Currency Name: </span>{props.results && props.results[0].CurrencyName}</div>
            <div className="currency-symbol"><span>Currency Symbol: </span>{props.results && props.results[0].CurrencySymbol}</div>
            {/* <Info results={props.results} /> */}
            <NavLink className="search-link-button" onClick={props.backToDefault} to="/">Back</NavLink>
            {/* <div className="country-flag"><img className="flag" src={props.results && props.results[0].Flag} /></div> */}
            {/* <DynamicBackground results={props.results && props.results[0].Flag}/> */}
        </div>
    )

}


export default CountryInfoData;