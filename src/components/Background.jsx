import React from "react";

const Background = (props) => {
  const weatherState = props.description;
  const imagePath = {
    nature: "/images/themes/nature/",
    city: "/images/themes/city/",
    minimalistic: "/images/themes/minimalistic/",
    none: "/images/",
  };
  const imageName = (function () {
    switch (props.timeOfTheDay) {
      case "day":
        switch (weatherState) {
          case "Clear":
          case "Clouds":
          case "Thunderstorm":
          case "Drizzle":
          case "Rain":
          case "Snow":
          case "Mist":
          case "Smoke":
          case "Haze":
          case "Dust":
          case "Fog":
          case "Sand":
          case "Ash":
          case "Squall":
          case "Tornado":
          default:
            return "day-sunny.gif";
        }
      case "night":
        return "night-clearsky.gif";
      case "dawn":
      case "twilight":
        return "sunset-clearsky.gif";
      default:
        return "ghibli.jpg";
    }
  })();

  return (
    <div className="Background">
      <img
        className="main-theme"
        src={window.location.origin + imagePath[`${props.theme}`] + imageName}
        alt="background-theme"
      />
    </div>
  );
};

export default Background;
