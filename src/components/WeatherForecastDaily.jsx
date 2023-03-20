import React from "react";
import ButtonScroll from "./ButtonScroll";

const ItemDailyBrief = (props) => {
  return (
    <div className="forecast-scroll-card">
      <small>{props.weekday}</small>
      <img
        src={"https://openweathermap.org/img/wn/" + props.iconName + "@2x.png"}
        className="image-weather-small"
        alt="weather-icon"
      />
      <p>
        {props.tempMax}°<span className="unit-temp">{"С"}</span>
      </p>
      <p>
        {props.tempMin}°<span className="unit-temp">{"С"}</span>
      </p>
    </div>
  );
};
const WeatherForecastDaily = (props) => {
  return (
    <div className="WeatherForecastDaily">
      <h3>Week: Brief | Detailed</h3>
      <div className="container-scroll forecast-scroll">
        <ButtonScroll direction="left" />
        <div className="scrolling-wrapper">
          {props.data.map(function (hour, index) {
            return (
              <ItemDailyBrief
                key={index}
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
