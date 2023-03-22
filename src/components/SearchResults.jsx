import React from "react";
import WeatherCurrent from "./WeatherCurrent";
import WeatherForecastHourly from "./WeatherForecastHourly";
import WeatherForecastDaily from "./WeatherForecastDaily";
import Background from "./Background";

const SearchResults = (props) => {
  if (props.data) {
    const tsCurrent = new Date().getTime();
    const tsSunset = props.data.current.sunset * 1000;
    const tsSunrise = props.data.current.sunrise * 1000;
    const tsDawn = tsSunrise - 3600000;
    const tsTwilight = tsSunset - 3600000;
    const timeOfTheDay = (function () {
      if (tsCurrent > tsSunrise && tsCurrent < tsTwilight) {
        return "day";
      } else if (tsCurrent > tsDawn && tsCurrent < tsSunrise) {
        return "morning";
      } else if (tsCurrent > tsTwilight && tsCurrent < tsSunset) {
        return "evening";
      } else {
        return "night";
      }
    })();
    const fontStylingClass = timeOfTheDay === "night" ? "theme-dark" : "";
    const ForecastsDivider = () => {
      if (props.theme === "nature") {
        return (
          <img
            className="divider-image"
            src={window.location.origin + "/images/six-chibi.png"}
            alt="six-chibi"
          />
        );
      }
    };
    return (
      <div className={`SearchResults ${fontStylingClass}`}>
        <Background
          theme={props.theme}
          timeOfTheDay={timeOfTheDay}
          substate={props.data.current.weather[0].description}
          state={props.data.current.weather[0].Main}
          belowZero={props.data.temp > 0 ? true : false}
        />
        <WeatherCurrent
          data={props.data.current}
          units={props.units}
          locationName={props.location.name_short}
        />
        <WeatherForecastHourly
          data={props.data.hourly.slice(1)}
          units={props.units}
        />
        <ForecastsDivider />
        <WeatherForecastDaily
          data={props.data.daily.slice(1)}
          units={props.units}
        />
      </div>
    );
  } else {
    return <Background theme="none" timeOfTheDay={undefined} />;
  }
};

export default SearchResults;
