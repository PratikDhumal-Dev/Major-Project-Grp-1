import React from "react";

function Helmet(props) {
  document.title = "ByExpertise - " + props.title;
  return <div className="w-100">{props.children}</div>;
}

export default Helmet;
