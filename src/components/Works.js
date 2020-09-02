import React from "react";
import works1 from "../Images/works1.jpg";
import worksdev from "../Images/worksdev.jpg";
import "../css/Works.css";

function Works() {
  return (
    <div>
      <h2 className="section__title--work">My Work</h2>
      <p className="section__subtitle--work">Some of my practices</p>

      <div className="portfolio">
        <a
          href="https://covid-19-tracker-96fa2.firebaseapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio__item"
        >
          <img src={works1} alt="Works 1" className="portfolio__img" />
        </a>

        <a href="#" className="portfolio__item" rel="noopener noreferrer">
          <img src={worksdev} alt="Works 2" className="portfolio__img" />
        </a>

        {/* <a href="#" className="portfolio__item">
          <img src={worksdev} alt="Works 3" className="portfolio__img" />
        </a>

        <a href="#" className="portfolio__item">
          <img src={worksdev} alt="Works 4" className="portfolio__img" />
        </a>

        <a href="#" className="portfolio__item">
          <img src={worksdev} alt="Works 5" className="portfolio__img" />
        </a>

        <a href="#" className="portfolio__item">
          <img src={worksdev} alt="Works 6" className="portfolio__img" />
        </a> */}
      </div>
    </div>
  );
}

export default Works;
