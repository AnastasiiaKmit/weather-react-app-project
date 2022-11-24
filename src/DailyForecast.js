import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./DailyForecast.css";

export default function DailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    console.log(forecast);
    return (
      <div className="dailyForecast">
        <div className="row">
          <div className="col">
            <h3>Thu</h3>
            <div>
              <WeatherIcon code="01d" size={32} />
            </div>
            <div>
              <span className="dailyForecast-temperature-max">
                {forecast[0].temperature.maximum}{" "}
              </span>{" "}
              <span className="dailyForecast-temperature-min">
                {forecast[0].temperature.minimum}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "d0od434febbbf4261et13ad2f4f168da";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
}
