import React, { useState } from "react";
import ButtonSettings from "./ButtonSettings";
import ButtonGPS from "./ButtonGPS";
import SearchEngine from "./SearchEngine";
import SearchResults from "./SearchResults";

const WeatherApp = () => {
  const [units, setUnits] = useState("metric");
  const [coordinates, setCoordinates] = useState(null);
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  console.log(coordinates);
  console.log("11111111111111111111111111111" + units);
  return (
    <div className="container">
      <div style={{ marginBottom: 1 + "rem" }}>
        Coded by Anna Lavrenova,{" "}
        <a href="https://github.com/Anna2049/react-totoro-weather">
          GitHub source
        </a>
      </div>
      <div className="ControlsBar">
        <ButtonSettings />
        <ButtonGPS updateCoordinates={setCoordinates} />
        <SearchEngine
          units={units}
          updateCoordinates={setCoordinates}
          updateLocation={setLocation}
          updateWeatherData={setWeatherData}
        />
      </div>
      <SearchResults
        locationName={location}
        units={units}
        updateUnits={setUnits}
        data={weatherData}
      />
    </div>
  );
};

export default WeatherApp;
