import "./App.css";
import WeatherApp from "./components/WeatherApp";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [preferences, setPreferences] = useState({});
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const loadApp = async () => {
      setLoading(true);
      const savedPreferences = localStorage.getItem("TotoroWeatherApp")
        ? JSON.parse(localStorage.getItem("TotoroWeatherApp"))
        : null;
      const units = savedPreferences.units ? savedPreferences.units : "metric";
      const theme = savedPreferences.theme ? savedPreferences.theme : "nature";
      const location = savedPreferences.location
        ? savedPreferences.location
        : {
            name_short: "Kyiv",
            address: "Kyiv, Ukraine, 02000",
            coords: {
              lat: 50.4501,
              lng: 30.5234,
            },
          };
      const keyOpenWeather = "13e9496ba2a5643119025f905a5f6396";
      const url =
        "https://api.openweathermap.org/data/2.5/onecall" +
        `?lat=${location.coords.lat}&lon=${
          location.coords.lng
        }&units=${"metric"}` +
        `&exclude=minutely&appid=${keyOpenWeather}`;
      console.log(url);
      const weather = await axios.get(url);
      setWeatherData(weather.data);
      setPreferences({
        units: units,
        theme: theme,
        location: location,
        weatherData: weather,
      });
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    loadApp();
  }, []);

  return (
    <>
      <div className="App">
        {loading ? (
          <div className="BackgroundLoader">
            <img
              className="Loader"
              src={`${window.location.origin}/images/loader-toto2.gif`}
              alt="background-theme"
            />
            <div className="loader-text">Loading...</div>
          </div>
        ) : (
          <WeatherApp preferences={preferences} weatherData={weatherData} />
        )}
      </div>
    </>
  );
}

export default App;
