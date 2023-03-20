import React, { useState } from "react";
import ButtonSettings from "./ButtonSettings";
import ButtonGPS from "./ButtonGPS";
import SearchEngine from "./SearchEngine";
import SearchResults from "./SearchResults";

const WeatherApp = () => {
  const [units, setUnits] = useState("metric");
  const [theme, setTheme] = useState("nature");
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  console.log(location);
  //console.log(coordinates);
  //console.log(units);
  //console.log(theme);
  //console.log(weatherData);
  return (
    <div className="container" style={{ marginTop: 1 + "rem" }}>
      <div className="ControlsBar">
        <ButtonSettings
          units={units}
          updateUnits={setUnits}
          theme={theme}
          updateTheme={setTheme}
        />
        <ButtonGPS />
        <SearchEngine
          units={units}
          updateLocation={setLocation}
          updateWeatherData={setWeatherData}
        />
      </div>
      <SearchResults
        location={location}
        units={units}
        updateUnits={setUnits}
        data={weatherData}
        theme={theme}
      />
    </div>
  );
};

export default WeatherApp;
