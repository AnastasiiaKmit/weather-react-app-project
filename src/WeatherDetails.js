import React from "react";
import FormattedDate from "./FormattedDate";
import ConvertedUnits from "./ConvertedUnits";
import WeatherIcon from "./WeatherIcon";

import "./weatherDetails.css";

export default function WeatherDetails(props) {
  return (
    <div className="weatherDetails">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6 ">
          <div className="row">
            <div className="col-6">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="col-6">
              <ConvertedUnits celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
