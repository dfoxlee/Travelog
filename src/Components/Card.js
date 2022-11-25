import React from "react";
import "./Card.css";
const lasVegasImg = require("../images/lasVegasImg.jpg");
const mapPinIcon = require("../images/mapPinIcon.png");

function Card(props) {
    console.log(props);
    return(
        <div className="card--container">
            <img className="card--image" src={props.obj.image} alt="Las Vegas skyline" />
            <div className="card--description-wrapper">
                <h2 className="card--title">{props.obj.location}</h2>
                <div className="card--map-wrapper">
                    <img className="card--map-pin" src={mapPinIcon} alt="map pin icon"/>
                    <a className="card--map-link" href={props.obj.link} target="_blank">View in Google Maps</a>
                </div>
                <p className="card--description">{props.obj.description}</p>
                <a className="card--read-more-link" href="#">Read More</a>
            </div>
        </div>
    );
}

export default Card;