import React from "react";

const FrontLayerRain = (props) => {
  const rainIntensity =
    props.description === "light rain" || props.description === "moderate rain"
      ? "rain"
      : "rain-heavy";
  return (
    <div className="Background front-layer">
      <img
        src={`${window.location.origin}/images/layers/${rainIntensity}.gif`}
        alt={rainIntensity}
      />
    </div>
  );
};

export default FrontLayerRain;
