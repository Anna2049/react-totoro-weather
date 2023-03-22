import React from "react";

const FrontLayerDrizzle = () => {
  return (
    <div className="Background front-layer">
      <img
        src={`${window.location.origin}/images/layers/${"rain-drizzle"}.gif`}
        alt="rain-drizzle"
      />
    </div>
  );
};

export default FrontLayerDrizzle;
