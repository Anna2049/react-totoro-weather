import React, { useState } from "react";

const UnitsSwitcher = (props) => {
  const [units, setUnits] = useState(props.units);
  function updateAppUnits(event) {
    event.preventDefault();
    const setAppUnits = props.updateUnits;
    const selecteUnits = event.target.getAttribute("value");
    setUnits(selecteUnits);
    setAppUnits(selecteUnits);
    console.log("3333333333333333333333333333" + selecteUnits);
  }
  if (units === "imperial") {
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
