import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Offcanvas from "react-bootstrap/Offcanvas";
import DescriptionImagesOW from "./DescriptionImagesOW";
import DescriptionIcons from "./DescriptionIcons";

const ButtonSettings = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function updatePreferences(key, value) {
    let preferences = JSON.parse(localStorage.getItem("TotoroWeatherApp"));
    preferences[key] = value;
    localStorage.setItem("TotoroWeatherApp", JSON.stringify(preferences));
  }
  function updateUnits(value) {
    props.updateUnits(value);
    updatePreferences("units", value);
  }
  function updateTheme(value) {
    props.updateTheme(value);
    updatePreferences("theme", value);
  }
  const Settings = () => {
    return (
      <div className="Settings">
        <div>
          <label htmlFor="preference-theme">Theme preference : </label>
          <select
            defaultValue={props.theme}
            id="preference-theme"
            onChange={(event) => updateTheme(event.target.value)}
          >
            <option value="nature">Nature</option>
            <option value="city">City</option>
            {/*<option value="minimalistic">Minimalistic</option>*/}
          </select>
        </div>
        <div>
          <label htmlFor="preference-units">Units preference : </label>
          <select
            defaultValue={props.units}
            id="preference-units"
            onChange={(event) => updateUnits(event.target.value)}
          >
            <option value="metric">Metric</option>
            <option value="imperial">Imperial</option>
          </select>
        </div>
      </div>
    );
  };
  return (
    <>
      <button type="button" className="ButtonSettings" onClick={handleShow}>
        <Icon icon="codicon:three-bars" />
      </button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Settings />
          <hr />
          {/* <h3>Icons meaning: indices</h3> */}
          <DescriptionIcons />
          <hr />
          {/* <h3>Icons meaning: forecast</h3> */}
          <DescriptionImagesOW />
          <hr />
          <footer>
            <img src="images/footer.png" className="image-footer" alt="toto" />
            <a
              href="https://github.com/Anna2049/react-totoro-weather"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open source code
            </a>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <span>by Anna Lavrenova</span>
              <a
                href="https://www.linkedin.com/in/lavranna/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="logos:linkedin-icon"
                  style={{ marginLeft: 0.2 + "em" }}
                />
              </a>
            </div>
          </footer>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ButtonSettings;
