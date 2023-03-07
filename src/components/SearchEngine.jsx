import React from "react";
import Autocomplete from "react-google-autocomplete";
import axios from "axios";

const SearchEngine = (props) => {
  const units = props.units;
  console.log("2222222222222222222222222222" + units);
  function getOpenWeatherData(args) {
    console.log("Sending request to OpenWeather...");
    const setWeatherData = props.updateWeatherData;
    const keyOpenWeather = "13e9496ba2a5643119025f905a5f6396";
    console.log(units);

    const url =
      "https://api.openweathermap.org/data/2.5/onecall" +
      `?lat=${args.coords.lat}&lon=${args.coords.lng}&units=${units}` +
      `&exclude=minutely&appid=${keyOpenWeather}`;

    console.log("!!!!!!!!!!!!!!!!!!!!! " + url);
    axios
      .get(url)
      .then((response) => {
        console.log("Sending request to OpenWeather... success");
        setWeatherData(response.data);
      })
      .catch(function (error) {
        console.log("Sending request to OpenWeather... failure");
        console.error(error);
        setWeatherData(null);
      });
  }
  function updatePlace(googlePlaceObj) {
    const setCoordinates = props.updateCoordinates;
    const setLocation = props.updateLocation;
    const locationName = googlePlaceObj.address_components[0].long_name;
    const locationCoords = {
      lat: googlePlaceObj.geometry.location.lat(),
      lng: googlePlaceObj.geometry.location.lng(),
    };
    setLocation(locationName);
    setCoordinates(locationCoords);
    getOpenWeatherData({ coords: locationCoords });
  }
  console.log("Rendering: SearchEngine..." + props.units);
  /*<button type="submit">Search</button>*/
  return (
    <Autocomplete
      className="SearchEngine"
      apiKey={"AIzaSyCnMPWcmFo_Je-QnkZBUUNyIlaqwyBIBco"}
      onPlaceSelected={(place) => updatePlace(place)}
    />
  );
};

export default SearchEngine;
