import React from "react";
import { Icon } from "@iconify/react";

const TileHourly = (props) => {
  return (
    <div className="forecast-scroll-card">
      <small>{props.weekday}</small>
      <p className="time">{props.time}</p>
      <img
        src={"https://openweathermap.org/img/wn/" + props.iconName + "@2x.png"}
        className="image-weather-small"
        alt="weather-icon"
      />
      <p>
        {props.temperature}°<span className="unit-temp">{"С"}</span>
      </p>
    </div>
  );
};
const WeatherForecastHourly = (props) => {
  console.log("Rendering: SearchResults / WeatherForecastHourly");
  console.log(props.data);
  return (
    <div className="WeatherForecastHourly">
      <h3>Hourly: 48 hours</h3>
      <div className="forecast-scroll">
        <button className="scroll-left">
          <Icon icon="bx:left-arrow" />
        </button>
        <div className="scrolling-wrapper">
          {props.data.map(function (hour, index) {
            return (
              <TileHourly
                key={index}
                weekday={new Date(hour.dt * 1000).toLocaleString([], {
                  weekday: "short",
                })}
                time={new Date(hour.dt * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
                temperature={Math.round(hour.temp)}
                iconName={hour.weather[0].icon}
              />
            );
          })}
        </div>
        <button className="btn-scroll">
          <Icon icon="bx:right-arrow" />
        </button>
      </div>
    </div>
  );
};
export default WeatherForecastHourly;
