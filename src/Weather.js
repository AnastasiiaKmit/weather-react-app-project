import React, { useState } from "react";
import axios from "axios";

import WeatherDetails from "./WeatherDetails";
import "./weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [currentWeatherData, setCurrentWeatherData] = useState({
    loaded: false,
  });
  function showLoaded(response) {
    setCurrentWeatherData({
      loaded: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  }

  function search() {
    let apiKey = "0fd0719178975f973227695c5ae18796";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showLoaded);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  if (currentWeatherData.loaded) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="form-control"
                autoComplete="off"
                placeholder="Type a city..."
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                className="btn btn-primary w-100"
                value="Search"
              />
            </div>
          </div>
        </form>
        <WeatherDetails data={currentWeatherData} />
      </div>
    );
  } else {
    search();
    return <p>Loading...</p>;
  }
}
