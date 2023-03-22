import React from "react";
import Rain from "./FrontLayerRain";
import Drizzle from "./FrontLayerDrizzle";

const Thunder = () => {
  return (
    <div className="Background front-layer">
      <img
        src={`${window.location.origin}/images/layers/${"thunder.gif"}`}
        alt="thunder"
      />
    </div>
  );
};

const FrontLayerThunder = (props) => {
  switch (props.description) {
    case "thunderstorm with light rain":
    case "thunderstorm with rain":
      return (
        <>
          <Rain description={"moderate rain"} />;
          <Thunder />;
        </>
      );
    case "thunderstorm with light drizzle":
    case "thunderstorm with drizzle":
    case "thunderstorm with heavy drizzle":
      return (
        <>
          <Drizzle />
          <Thunder />
        </>
      );
    case "thunderstorm with heavy rain":
      return (
        <>
          <Rain description={"heavy intensity rain"} />;
          <Thunder />;
        </>
      );
    default:
      return <Thunder />;
  }
};

export default FrontLayerThunder;
