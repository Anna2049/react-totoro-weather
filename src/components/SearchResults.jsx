import React from "react";
import WeatherCurrent from "./WeatherCurrent";
import WeatherForecastHourly from "./WeatherForecastHourly";
import WeatherForecastDaily from "./WeatherForecastDaily";

const SearchResults = (props) => {
  console.log("Rendering: SearchResults");
  if (props.data) {
    return (
      <div className="SearchResults">
        <WeatherCurrent
          data={props.data.current}
          units={props.units}
          locationName={props.locationName}
          updateUnits={props.updateUnits}
        />
        <WeatherForecastHourly data={props.data.hourly} units={props.units} />
        <WeatherForecastDaily data={props.data.daily} units={props.units} />
      </div>
    );
  } else {
    return <div>Please use search to start...</div>;
  }
};

export default SearchResults;
