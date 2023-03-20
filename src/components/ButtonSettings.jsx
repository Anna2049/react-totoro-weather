import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Offcanvas from "react-bootstrap/Offcanvas";
import DescriptionImagesOW from "./DescriptionImagesOW";
import DescriptionIcons from "./DescriptionIcons";

const ButtonSettings = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Settings = () => {
    /*
    const [units, setUnits] = useState(props.units);
    const [theme, setTheme] = useState(props.theme);
    function updateUnits(value) {
      setUnits(value);
    }
    function updateTheme(value) {
      setTheme(value);
    }
    */
    console.log("RENDER");
    return (
      <div className="Settings">
        Theme:
        <select
          value={props.theme}
          className=""
          onChange={(event) => props.updateTheme(event.target.value)}
        >
          <option value="" disabled>
            Choose...
          </option>
          <option value="nature">Nature</option>
          <option value="city">City</option>
          <option value="minimalistic" disabled>
            Minimalistic
          </option>
        </select>
        Units:
        <select
          value={props.units}
          className=""
          onChange={(event) => props.updateUnits(event.target.value)}
        >
          <option value="" disabled>
            Choose...
          </option>
          <option value="metric">Metric</option>
          <option value="imperial">Imperial</option>
        </select>
        <br />
        Saved location:
        <div>
          <small>
            <i>* new settings are applied starting from next search</i>
          </small>
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
          <Offcanvas.Title>Settings</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Settings />
          <hr />
          <h3>Icons meaning: indices</h3>
          <DescriptionIcons />
          <hr />
          <h3>Icons meaning: forecast</h3>
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
