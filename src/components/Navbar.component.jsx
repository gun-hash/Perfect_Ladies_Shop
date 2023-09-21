import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleBtnIcon, setToggleBtnIcon] = useState(faBars);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setToggleBtnIcon(isOpen ? faBars : faTimes);
  };

  return (
    <>
      <header>
        <div className="navbar">
          <div className="logo">
            <a href="#">Perfect Ladies Shop</a>
          </div>
          <ul className="links">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#drops">Latest Drops</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
          <a href="#hero" className="action_btn">
            Buy Now
          </a>
          <div className="toggle_btn" onClick={toggleMenu}>
            <FontAwesomeIcon icon={toggleBtnIcon} />
          </div>
        </div>
        <div className={`dropdown_menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#drops">Latest Drops</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="#hero" className="action_btn">
                Buy Now
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Navbar;
