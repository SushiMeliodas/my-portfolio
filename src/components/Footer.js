import React from "react";
import "../css/Footer.css";
import { List, ListItem } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab);

function Footer() {
  return (
    <div>
      <a href="mailto:bryanyf@hotmail.com" className="footer__link">
        bryanyf@hotmail.com
      </a>
      <List className="social-list">
        <ListItem className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.linkedin.com/in/yew-fung-sim-633648183"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </ListItem>
        {/* <ListItem className="social-list__item">
          <a className="social-list__link" href="https://www.instagram.com/">
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </a>
        </ListItem>
        <ListItem className="social-list__item">
          <a className="social-list__link" href="https://twitter.com/?lang=en">
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
        </ListItem> */}
        <ListItem className="social-list__item">
          <a
            className="social-list__link"
            href="https://github.com/SushiMeliodas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </ListItem>
      </List>
    </div>
  );
}

export default Footer;
