import React from "react";
import bryan from "../Images/bryan.jpg";
import "../css/Introduction.css";

function Introduction() {
  return (
    <div className="intro">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Bryan Sim</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        fresh-graduate
      </p>
      <img src={bryan} alt="Bryan" className="intro__img" />
    </div>
  );
}

export default Introduction;
