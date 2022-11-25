import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";

export default function DailyForecastDay(props) {
  function maximumTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minimumTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="dailyForecastDay">
      <h3>{day()}</h3>
      <div>
        <WeatherIcon code={props.data.condition.icon} size={32} />
      </div>
      <div>
        <span className="dailyForecast-temperature-max">
          {maximumTemperature()}{" "}
        </span>{" "}
        <span className="dailyForecast-temperature-min">
          {minimumTemperature()}
        </span>
      </div>
    </div>
  );
}
