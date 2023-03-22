import React from "react";
import Drizzle from "./FrontLayerDrizzle";
import Rain from "./FrontLayerRain";
import Snow from "./FrontLayerSnow";
import Thunder from "./FrontLayerThunder";
import Fog from "./FrontLayerFog";
import Clouds from "./Clouds"; //combine with other layers?

const FrontLayer = (props) => {
  const weatherState = props.state;
  const weatherSubState = props.substate;
  switch (weatherState) {
    case "Drizzle":
      return <Drizzle />;
    case "Thunderstorm":
      return <Thunder description={weatherSubState} />;
    case "Rain":
      return <Rain description={weatherSubState} />;
    case "Snow":
      return <Snow />;
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
      return <Fog />;
    case "Sand":
    case "Ash":
      return <></>;
    case "Squall":
      return (
        <img
          style={{ opacity: 0.3 }}
          className="Background front-layer"
          src={`${window.location.origin}/images/layers/${"tornado.gif"}`}
          alt="clouds"
        />
      );
    case "Tornado":
      return (
        <img
          className="Background front-layer"
          src={`${window.location.origin}/images/layers/${"tornado.gif"}`}
          alt="clouds"
        />
      );
    case "Clouds":
      return <Clouds />;
    default: //Clear
      return <></>;
  }
};

export default FrontLayer;
