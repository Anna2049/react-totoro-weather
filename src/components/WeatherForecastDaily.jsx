import React from "react";
import ButtonScroll from "./ButtonScroll";

const ItemDailyBrief = (props) => {
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
      <img
        src={"https://openweathermap.org/img/wn/" + props.iconName + "@2x.png"}
        className="image-weather-small"
        alt="weather-icon"
      />
      <p>
        {valueTemp(props.tempMax)}
        <span className="unit-temp">{unitTemp}</span>
      </p>
      <p>
        {valueTemp(props.tempMin)}
        <span className="unit-temp">{unitTemp}</span>
      </p>
    </div>
  );
};
const WeatherForecastDaily = (props) => {
  return (
    <div className="WeatherForecastDaily">
      <h3>7 Day Forecast</h3>
      <div className="container-scroll forecast-scroll">
        <ButtonScroll direction="left" />
        <div className="scrolling-wrapper">
          {props.data.map(function (hour, index) {
            return (
              <ItemDailyBrief
                key={index}
                units={props.units}
                weekday={new Date(hour.dt * 1000).toLocaleString([], {
                  weekday: "short",
                })}
                time={new Date(hour.dt * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
                tempMax={Math.round(hour.temp.max)}
                tempMin={Math.round(hour.temp.min)}
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
export default WeatherForecastDaily;
