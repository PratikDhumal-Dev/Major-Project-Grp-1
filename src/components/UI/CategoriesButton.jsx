import React, { useState } from "react";
import "../../styles/CategoriesButton.css";

function CategoriesButton() {
  const [show, setShow] = useState(false);
  const toggleChecked = () => setShow((value) => !value);

  return (
    <div className="categoriesSection">
      <div className="categoriesButton">
        <input
          id="ss-cube-btn"
          className="checkbox"
          type="checkbox"
          onChange={toggleChecked}
        />

        <label className="ss-toggle checkbox" for="ss-cube-btn" type="checkbox">
          Animation
        </label>
      </div>
      {show ? (
        <div className="categoriesButton">
          <input id="ss-cube-btn2" className="checkbox2" type="checkbox" />

          <label
            className="ss-toggle2 checkbox2"
            for="ss-cube-btn2"
            type="checkbox"
          >
            2D Animation
          </label>
        </div>
      ) : null}
      <div className="categoriesButton">
        <input id="ss-cube-btn3" className="checkbox3" type="checkbox" />

        <label
          className="ss-toggle3 checkbox"
          for="ss-cube-btn3"
          type="checkbox"
        >
          Photo
        </label>
      </div>
      <div className="categoriesButton">
        <input id="ss-cube-btn4" className="checkbox4" type="checkbox" />

        <label
          className="ss-toggle4 checkbox2"
          for="ss-cube-btn4"
          type="checkbox"
        >
          VFX
        </label>
      </div>
      <div className="categoriesButton">
        <input id="ss-cube-btn5" className="checkbox5" type="checkbox" />

        <label
          className="ss-toggle5 checkbox2"
          for="ss-cube-btn5"
          type="checkbox"
        >
          Graphic Design
        </label>
      </div>
      <div className="categoriesButton">
        <input id="ss-cube-btn6" className="checkbox6" type="checkbox" />

        <label
          className="ss-toggle6 checkbox6"
          for="ss-cube-btn6"
          type="checkbox"
        >
          Art & Craft
        </label>
      </div>
      <div className="categoriesButton">
        <input id="ss-cube-btn7" className="checkbox7" type="checkbox" />

        <label
          className="ss-toggle7 checkbox6"
          for="ss-cube-btn7"
          type="checkbox"
        >
          Game Development
        </label>
      </div>
      <div className="categoriesButton">
        <input id="ss-cube-btn8" className="checkbox8" type="checkbox" />

        <label
          className="ss-toggle8 checkbox8"
          for="ss-cube-btn8"
          type="checkbox"
        >
          Creative Software
        </label>
      </div>
      <div className="categoriesButton">
        <input id="ss-cube-btn9" className="checkbox9" type="checkbox" />

        <label
          className="ss-toggle9 checkbox9"
          for="ss-cube-btn9"
          type="checkbox"
        >
          Video
        </label>
      </div>
    </div>
  );
}

export default CategoriesButton;
