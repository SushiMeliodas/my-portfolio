import React, { useState } from "react";
import "../css/NavigationBar.css";
import { MenuItem, Menu, Button } from "@material-ui/core";

function NavigationBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  // const [state, setState] = useState(false);

  // function toggle() {
  //   setState(!state);
  // }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <h1 className="logo">Bryan-Portfolio</h1>
      {/* <button
        onClick={toggle}
        className="nav-toggle"
        aria-label="toggle navigation"
      >
        <span className="hamburger"></span>
      </button> */}
      {/* <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#skills" className="nav__link">
              My Skills
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              About Me
            </a>
          </li>
          <li className="nav__item">
            <a href="#work" className="nav__link">
              My Works
            </a>
          </li>
        </ul>
      </nav> */}

      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <span className="hamburger"></span>
      </Button>
      <nav className="nav">
        <Menu
          className="nav__list"
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} className="nav__item">
            <a href="#home" className="nav__link">
              Home
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose} className="nav__item">
            <a href="#skills" className="nav__link">
              My Skills
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose} className="nav__item">
            <a href="#about" className="nav__link">
              About Me
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose} className="nav__item">
            <a href="#work" className="nav__link">
              My Works
            </a>
          </MenuItem>
        </Menu>
      </nav>
    </div>
  );
}

export default NavigationBar;
