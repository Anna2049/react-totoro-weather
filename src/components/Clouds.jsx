import React from "react";

const Clouds = () => {
  return (
    <div className="Clouds layer-clouds">
      <img
        src={`${window.location.origin}/images/layers/${"clouds2.png"}`}
        alt="clouds"
      />
      <img
        src={`${window.location.origin}/images/layers/${"clouds.png"}`}
        alt="clouds"
      />
    </div>
  );
};

export default Clouds;
