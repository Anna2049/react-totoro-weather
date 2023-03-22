import React from "react";
import FrontLayer from "./FrontLayer";

const Background = (props) => {
  const weatherState = props.state;
  const weatherSubState = props.substate;
  const imagePath = {
    nature: "/images/themes/nature/",
    city: "/images/themes/city/",
    minimalistic: "/images/themes/minimalistic/",
    none: "/images/",
  };
  const imageName = (function () {
    switch (props.timeOfTheDay) {
      //seasons can be added based on temp
      case "day":
        return "day.gif";
      case "night":
        return "night.gif";
      case "morning":
        return "morning.gif";
      case "evening":
        return "evening.gif";
      default:
        return "ghibli.jpg";
    }
  })();
  return (
    <>
      <div className="Background main-theme">
        <img
          src={window.location.origin + imagePath[`${props.theme}`] + imageName}
          alt="background-theme"
        />
      </div>
      <FrontLayer state={weatherState} substate={weatherSubState} />
    </>
  );
};

export default Background;
