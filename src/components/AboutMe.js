import React from "react";
import "../css/AboutMe.css";
import bryan2 from "../Images/bryan2.jpg";

function AboutMe() {
  return (
    <div className="about-me">
      <h2 className="section__title section__title--about">Who am I</h2>
      <p className="section__subtitle section__subtitle--about">
        fresh-graduate who wan to become Web-Developer
      </p>

      <div className="about-me__body">
        <p>
          My name is Bryan Sim, an IT fresh graduate from{" "}
          <a
            href="https://segi.edu.my/visit-segi/segi-university-kota-damansara"
            target="_blank"
            rel="noopener noreferrer"
            className="about-me__refer"
          >
            SEGi University
          </a>{" "}
          who is actively looking for an opportunity to work as a Web Developer.
          I believe this will put me on a path in learning and improving myself
          particularly in the Web Development industry.
        </p>
        <p className="about-me__refer">I am a person...</p>
        <p>
          Fueled with passion and hunger for deeper knowledge related to Web
          Development,
        </p>
        <p>Avid interest in understanding the industry,</p>
        <p>Self-studying the latest trending Web Development Technolgies.</p>
      </div>
      <img src={bryan2} alt="Bryan at Japan" className="about-me__img" />
    </div>
  );
}

export default AboutMe;
