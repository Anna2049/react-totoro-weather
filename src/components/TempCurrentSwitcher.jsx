/*
import React, { useState } from "react";

const Temperature = (props) => {
  console.log([props.tValueUnits, props.targetUnits].join("-"));
  const transformedVal = (function () {
    switch ([props.tValueUnits, props.targetUnits].join("-")) {
      case "metric-imperial":
        return Math.round(props.tValue * 1.8 + 32);
      case "imperial-metric":
        return Math.round((props.tValue - 32) / 1.8);
      default:
        return Math.round(props.tValue);
    }
  })();
  console.log(transformedVal);
  return <div className="temperature-value">{transformedVal}</div>;
};

const TempCurrentSwitcher = (props) => {
  const [tempUnits, setTempUnits] = useState(props.units);
  function updateTempUnits(event) {
    event.preventDefault();
    const switchUnits = event.target.getAttribute("value");
    setTempUnits(switchUnits);
  }
  const UnitsSwitcher = (props) => {
    if (props.toUnit === "imperial") {
      return (
        <div className="ci-units">
          °{" "}
          <span className="UnitsSwitcher">
            C |{" "}
            <a href="/" value="imperial" onClick={updateTempUnits}>
              F
            </a>
          </span>
        </div>
      );
    } else {
      return (
        <div className="ci-units">
          °{" "}
          <span className="UnitsSwitcher">
            F |{" "}
            <a href="/" value="metric" onClick={updateTempUnits}>
              C
            </a>
          </span>
        </div>
      );
    }
  };
  return (
    <div className="TempCurrentSwitcher">
      <Temperature
        tValue={props.currentTemp}
        tValueUnits={props.units}
        targetUnits={tempUnits}
      />
      <UnitsSwitcher toUnit={tempUnits === "metric" ? "imperial" : "metric"} />
    </div>
  );
};

export default TempCurrentSwitcher;
*/
