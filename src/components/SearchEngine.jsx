import React from "react";
import Autocomplete from "react-google-autocomplete";
import axios from "axios";

const SearchEngine = (props) => {
  const units = props.units;
  const updateLocation = props.updateLocation;
  function getOpenWeatherData(coords) {
    console.log("Sending request to OpenWeather...");
    const setWeatherData = props.updateWeatherData;
    const keyOpenWeather = "13e9496ba2a5643119025f905a5f6396";
    const url =
      "https://api.openweathermap.org/data/2.5/onecall" +
      `?lat=${coords.lat}&lon=${coords.lng}&units=${units}` +
      `&exclude=minutely&appid=${keyOpenWeather}`;
    axios
      .get(url)
      .then((response) => {
        console.log("Sending request to OpenWeather... success");
        setWeatherData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log("Sending request to OpenWeather... failure");
        console.error(error);
        setWeatherData(null);
      });
  }
  function processSelectedPlace(googlePlaceObj) {
    const location = {
      name_short: googlePlaceObj.address_components[0].long_name,
      address: googlePlaceObj.formatted_address,
      country: googlePlaceObj.address_components.find(
        (item) => item.types.includes("country").long_name
      ),
      coords: {
        lat: googlePlaceObj.geometry.location.lat(),
        lng: googlePlaceObj.geometry.location.lng(),
      },
    };
    updateLocation(location);
    getOpenWeatherData(location.coords);
  }
  return (
    <Autocomplete
      className="SearchEngine"
      apiKey={"AIzaSyCnMPWcmFo_Je-QnkZBUUNyIlaqwyBIBco"}
      onPlaceSelected={(place) => processSelectedPlace(place)}
    />
  );
};

export default SearchEngine;
