import React from "react";

const FrontLayerSnow = () => {
  return (
    <div className="Background front-layer">
      <img
        src={`${window.location.origin}/images/layers/${"snow.gif"}`}
        alt="snow"
      />
    </div>
  );
};

export default FrontLayerSnow;
