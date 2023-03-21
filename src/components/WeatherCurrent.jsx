import React from "react";
import { Icon } from "@iconify/react";

const MainInfo = (props) => {
  const unitTemp =
    props.units === "metric" ? (
      <span className="unit-temp">{"°С"}</span>
    ) : (
      <span className="unit-temp">{"°F"}</span>
    );
  const valueTemp = function (value) {
    if (props.units === "imperial") {
      return Math.round(value * 1.8 + 32);
    } else {
      return Math.round(value);
    }
  };
  return (
    <div className="MainInfo">
      <div className="temperature">
        <div>{valueTemp(props.temperature)}</div>
        <div className="ci-units">{unitTemp}</div>
      </div>
      <div className="location">{props.locationName}</div>
      <div className="weather-description">{props.descr}</div>
      <p className="datetime">
        Last updated:{" "}
        {new Date(props.unixstamp).toLocaleString("en-US", {
          weekday: "short",
          year: "numeric",
          month: "short",
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
  const unitTemp =
    props.units === "metric" ? (
      <span className="unit-temp">{"°С"}</span>
    ) : (
      <span className="unit-temp">{"°F"}</span>
    );
  const valueTemp = function (value) {
    if (props.units === "imperial") {
      return Math.round(value * 1.8 + 32);
    } else {
      return Math.round(value);
    }
  };
  const unitSpeed =
    props.units === "metric" ? (
      <span className="unit-speed">{"m/s"}</span>
    ) : (
      <span className="unit-speed">{"mph"}</span>
    );
  const valueSpeed = function (value) {
    if (props.units === "imperial") {
      return Math.round(value * 2.237);
    } else {
      return Math.round(value);
    }
  };
  return (
    <div className="CurrentIndices">
      <div className="ci-feelslike">
        <div className="ci-icon">
          <Icon icon="iconoir:t-shirt" />
        </div>
        <div className="ci-result">{valueTemp(props.data.feels_like)}</div>
        <div className="ci-units">{unitTemp}</div>
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
        <div className="ci-result">{props.data.pressure}</div>
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
          {valueSpeed(props.data.wind_speed)}
          <WindDirection degrees={props.data.wind_deg} />
        </div>
        <div className="ci-units">{unitSpeed}</div>
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
  return (
    <div className="WeatherCurrent">
      <MainInfo
        units={props.units}
        updateUnits={props.updateUnits}
        descr={props.data.weather[0].description}
        locationName={props.locationName}
        temperature={props.data.temp}
        unixstamp={props.data.dt * 1000}
      />
      <CurrentIndices data={props.data} units={props.units} />
    </div>
  );
};
export default WeatherCurrent;
