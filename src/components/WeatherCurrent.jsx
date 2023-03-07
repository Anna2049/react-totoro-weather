import React from "react";
import { Icon } from "@iconify/react";
import UnitsSwitcher from "./UnitsSwitcher";

const MainInfo = (props) => {
  return (
    <div className="MainInfo">
      <div className="temperature">
        <div>{props.temperature}</div>
        <div className="ci-units">
          °<UnitsSwitcher units={props.units} updateUnits={props.updateUnits} />
        </div>
      </div>
      <div className="location">{props.locationName}</div>
      <div className="weather-description">{props.descr}</div>
      <p className="datetime">
        Last updated:{" "}
        {new Date(props.unixstamp).toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </p>
    </div>
  );
};
const WindDirection = (props) => {
  const directions = ["⇑", "⇗", "⇒", "⇘", "⇓", "⇙", "⇐", "⇖"];
  return <span> {directions[Math.round(props.degrees / 45) % 8]}</span>;
};
const CurrentIndices = (props) => {
  console.log(props);
  /*
      <div className="ci-temp">
        <div className="ci-icon">
          <Icon icon="fa6-solid:temperature-high" />
          <Icon icon="fa6-solid:temperature-low" />
        </div>
        <div className="ci-result">{Math.round(props.data.temp)}</div>
        <div className="ci-units">
          °<span className="unit-temp">{"С"}</span>
        </div>
      </div>
  */
  return (
    <div className="CurrentIndices">
      <div className="ci-feelslike">
        <div className="ci-icon">
          <Icon icon="iconoir:t-shirt" />
        </div>
        <div className="ci-result">{Math.round(props.data.feels_like)}</div>
        <div className="ci-units">
          °<span className="unit-temp">{"С"}</span>
        </div>
      </div>
      <div className="ci-humidity">
        <div className="ci-icon">
          <Icon icon="material-symbols:water-drop-outline" />
        </div>
        <div className="ci-result">{props.data.humidity}</div>
        <div className="ci-units">%</div>
      </div>
      <div className="ci-pressure">
        <div className="ci-icon">
          <Icon icon="mdi:barometer" />
        </div>
        <div className="ci-result">{"1007"}</div>
        <div className="ci-units">{"hPa"}</div>
      </div>
      <div className="ci-clouds">
        <div className="ci-icon">
          <Icon icon="ic:outline-cloud-queue" />
        </div>
        <div className="ci-result">{props.data.clouds}</div>
        <div className="ci-units">%</div>
      </div>
      <div className="ci-uvindex">
        <div className="ci-icon">
          <Icon icon="carbon:uv-index-alt" />
        </div>
        <div className="ci-result">{props.data.uvi}</div>
        <div className="ci-units"></div>
      </div>
      <div className="ci-wind">
        <div className="ci-icon">
          <Icon icon="bx:wind" />
        </div>
        <div className="ci-result">
          {Math.round(props.data.wind_speed)}
          <WindDirection degrees={props.data.wind_deg} />
        </div>
        <div className="ci-units">{"km/h"}</div>
      </div>
      <div className="ci-sunrise">
        <div className="ci-icon">
          <Icon icon="bi:sunrise" />
        </div>
        <div className="ci-result">
          {new Date(props.data.sunrise * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
      <div className="ci-sunset">
        <div className="ci-icon">
          <Icon icon="bi:sunset" />
        </div>
        <div className="ci-result">
          {new Date(props.data.sunset * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
};

const WeatherCurrent = (props) => {
  console.log("Rendering: SearchResults / CurrentWeather");
  console.log(props.data);
  return (
    <div className="WeatherCurrent">
      <MainInfo
        units={props.units}
        updateUnits={props.updateUnits}
        descr={props.data.weather[0].description}
        locationName={props.locationName}
        temperature={Math.round(props.data.temp)}
        unixstamp={props.data.dt * 1000}
      />
      <CurrentIndices data={props.data} units={props.units} />
    </div>
  );
};
export default WeatherCurrent;
