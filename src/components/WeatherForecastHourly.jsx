import React from "react";
import ButtonScroll from "./ButtonScroll";

const TileHourly = (props) => {
  const unitTemp = props.units === "metric" ? "°С" : "°F";
  const valueTemp = function (value) {
    if (props.units === "imperial") {
      return Math.round(value * 1.8 + 32);
    } else {
      return Math.round(value);
    }
  };
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
        {valueTemp(props.temperature)}
        <span className="unit-temp">{unitTemp}</span>
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
                units={props.units}
                weekday={new Date(hour.dt * 1000).toLocaleString([], {
                  weekday: "short",
                })}
                time={new Date(hour.dt * 1000).toLocaleTimeString([], {
                  timeZone: props.timezone,
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
