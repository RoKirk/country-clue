import React from "react";
import { NavLink } from "react-router-dom";


function InfoFlag(props) {
    return (
        <div>
            <div><span>Region: </span> {props.results && props.results[0].Region}</div>
            <div><span>Sub-Region: </span> {props.results && props.results[0].SubRegion}</div>
            <div><span>Latitude: </span> {props.results && props.results[0].Latitude}</div>
            <div><span>Longitude: </span>{props.results && props.results[0].Longitude}</div>
            <div><span>Native Language: </span>{props.results && props.results[0].NativeLanguage}</div>
            <div><span>Currency Code: </span>{props.results && props.results[0].CurrencyCode}</div>
            <div><span>Currency Name: </span>{props.results && props.results[0].CurrencyName}</div>
            <div className="currency-symbol"><span>Currency Symbol: </span>{props.results && props.results[0].CurrencySymbol}</div>
            {/* <Info results={props.results} /> */}
            <NavLink to="/">Back</NavLink>
            {/* <DynamicBackground results={props.results && props.results[0].Flag}/> */}
        </div>
    )

}


export default InfoFlag;