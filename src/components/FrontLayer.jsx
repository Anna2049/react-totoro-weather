import React from "react";
import Drizzle from "./FrontLayerDrizzle";
import Rain from "./FrontLayerRain";
import Snow from "./FrontLayerSnow";
import Thunder from "./FrontLayerThunder";
import Fog from "./FrontLayerFog";

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
    case "Tornado":
      return <></>;
    default: //Clear, Clouds
      return <></>;
  }
};

export default FrontLayer;
