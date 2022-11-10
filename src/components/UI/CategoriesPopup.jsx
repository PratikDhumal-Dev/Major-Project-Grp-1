import React, { useState } from "react";
import Popup from "./Popup";
import "../../styles/CategoriesPopup.css";
import { Link } from "react-router-dom";
import CategoriesButton from "./CategoriesButton";

function CategoriesPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <input type="button" value="Click to Open Popup" onClick={togglePopup} />
      {isOpen && (
        <Popup
          content={
            <>
              <CategoriesButton />

              <Link to="/home">
                {" "}
                <button>Submit</button>
              </Link>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default CategoriesPopup;
