import React from "react";
import { Icon } from "@iconify/react";

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
  console.log(props.data);
  props.data.forEach(function (hour) {
    //console.log(hour.dt);
  });
  console.log("Rendering: SearchResults / WeatherForecastDaily");
  console.log(props.data);
  return (
    <div className="WeatherForecastDaily">
      <h3>Week: Brief | Detailed</h3>
      <div className="forecast-scroll">
        <button className="btn-scroll scroll-left">
          <Icon icon="bx:left-arrow" />
        </button>
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
        <button className="btn-scroll scroll-right">
          <Icon icon="bx:right-arrow" />
        </button>
      </div>
    </div>
  );
};
export default WeatherForecastDaily;
