import React, { useState } from "react";
import "../../styles/CategoriesButton.css";

function CategoriesButton() {
  const [showAnimation, setShowAnimation] = useState(false);
  const toggleCheckedAnimation = () => setShowAnimation((value) => !value);
  const [showPhoto, setShowPhoto] = useState(false);
  const toggleCheckedPhoto = () => setShowPhoto((value) => !value);

  return (
    <div className="categoriesSection">
      <div style={{ display: "flex" }}>
        <div className="categoriesButton">
          <input
            id="ss-cube-btn"
            className="checkbox"
            type="checkbox"
            onChange={toggleCheckedAnimation}
          />

          <label
            className="ss-toggle checkbox"
            for="ss-cube-btn"
            type="checkbox"
          >
            Animation
          </label>
        </div>

        <div className="categoriesButton">
          <input
            id="ss-cube-btn3"
            className="checkbox3"
            type="checkbox"
            onChange={toggleCheckedPhoto}
          />

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
      <div style={{ display: "flex" }}>
        {showAnimation ? (
          <div style={{}}>
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
            <div className="categoriesButton">
              <input
                id="ss-cube-btn10"
                className="checkbox10"
                type="checkbox"
              />

              <label
                className="ss-toggle10 checkbox2"
                for="ss-cube-btn10"
                type="checkbox"
              >
                3D Animation
              </label>
            </div>
            <div className="categoriesButton">
              <input
                id="ss-cube-btn10"
                className="checkbox10"
                type="checkbox"
              />

              <label
                className="ss-toggle10 checkbox2"
                for="ss-cube-btn10"
                type="checkbox"
              >
                Character Animation
              </label>
            </div>
          </div>
        ) : null}
        {showPhoto ? (
          <div style={{}}>
            <div className="categoriesButton">
              <input
                id="ss-cube-btn11"
                className="checkbox11"
                type="checkbox"
              />

              <label
                className="ss-toggle11 checkbox11"
                for="ss-cube-btn11"
                type="checkbox"
              >
                Photography
              </label>
            </div>
            <div className="categoriesButton">
              <input
                id="ss-cube-btn12"
                className="checkbox12"
                type="checkbox"
              />

              <label
                className="ss-toggle12 checkbox12"
                for="ss-cube-btn12"
                type="checkbox"
              >
                Digital Photography
              </label>
            </div>
            <div className="categoriesButton">
              <input
                id="ss-cube-btn13"
                className="checkbox13"
                type="checkbox"
              />

              <label
                className="ss-toggle13 checkbox13"
                for="ss-cube-btn13"
                type="checkbox"
              >
                Photography Mobile
              </label>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default CategoriesButton;
