import React, { useState } from "react";

const UnitsSwitcher = (props) => {
  const [tempUnits, setTempUnits] = useState(props.units);
  function updateAppUnits(event) {
    event.preventDefault();
    const setAppUnits = props.updateUnits;
    const switchUnits = event.target.getAttribute("value");
    setTempUnits(switchUnits);
    setAppUnits(switchUnits);
    console.log("3333333333333333333333333333" + switchUnits);
  }
  if (tempUnits === "imperial") {
    return (
      <span className="UnitsSwitcher">
        F |{" "}
        <a href="/" value="metric" onClick={updateAppUnits}>
          C
        </a>
      </span>
    );
  } else {
    return (
      <span className="UnitsSwitcher">
        C |{" "}
        <a href="/" value="imperial" onClick={updateAppUnits}>
          F
        </a>
      </span>
    );
  }
};

export default UnitsSwitcher;
