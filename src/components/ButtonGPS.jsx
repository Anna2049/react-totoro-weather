import React from "react";
import { Icon } from "@iconify/react";

const ButtonGPS = (props) => {
  const setCoordinates = props.updateCoordinates;
  function useGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(saveLocation);
    } else {
      alert("No GPS Functionality.");
    }
  }
  function saveLocation(position) {
    let coordsToSave = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCoordinates(coordsToSave);
    if (!localStorage.getItem("TotoroWeather")) {
      localStorage.setItem(
        "TotoroWeather",
        JSON.stringify({
          coords: coordsToSave,
        })
      );
    } else {
      let storedSettings = JSON.parse(localStorage.getItem("TotoroWeather"));
      storedSettings.position = coordsToSave;
      localStorage.setItem("TotoroWeather", JSON.stringify({ storedSettings }));
    }
  }
  return (
    <button className="ButtonGPS" onClick={useGeolocation}>
      <Icon icon="mdi:location-radius" />
    </button>
  );
};

export default ButtonGPS;
