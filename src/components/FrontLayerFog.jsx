import React from "react";

const FrontLayerFog = () => {
  return (
    <div className="Background front-layer">
      <img
        src={`${window.location.origin}/images/layers/${"fog.png"}`}
        alt="layer-fog"
      />
    </div>
  );
};

export default FrontLayerFog;
