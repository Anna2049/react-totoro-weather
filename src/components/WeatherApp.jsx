import React, { useState } from "react";
import ButtonSettings from "./ButtonSettings";
import ButtonGPS from "./ButtonGPS";
import SearchEngine from "./SearchEngine";
import SearchResults from "./SearchResults";

const WeatherApp = (props) => {
  //console.log(props.preferences);
  //console.log(props.weatherData);
  const [units, setUnits] = useState(props.preferences.units);
  const [theme, setTheme] = useState(props.preferences.theme);
  const [location, setLocation] = useState(props.preferences.location);
  const [weatherData, setWeatherData] = useState(props.weatherData);
  return (
    <div className="container" style={{ marginTop: 1 + "rem" }}>
      <div className="ControlsBar">
        <ButtonSettings
          units={units}
          updateUnits={setUnits}
          theme={theme}
          updateTheme={setTheme}
        />
        {/*<ButtonGPS />*/}
        <SearchEngine
          units={units}
          updateLocation={setLocation}
          updateWeatherData={setWeatherData}
        />
      </div>
      <SearchResults
        location={location}
        units={units}
        data={weatherData}
        theme={theme}
      />
    </div>
  );
};

export default WeatherApp;
