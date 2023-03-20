import React from "react";
import ButtonScroll from "./ButtonScroll";

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
  return (
    <div className="WeatherForecastHourly">
      <h3>Hourly: 48 hours</h3>
      <div className="container-scroll forecast-scroll">
        <ButtonScroll direction="left" />
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
        <ButtonScroll direction="right" />
      </div>
    </div>
  );
};
export default WeatherForecastHourly;
