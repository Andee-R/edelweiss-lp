import React, { useEffect, useState } from "react";
import "./Navbar.css";
import edelweisslogo from "../../assets/Flattend_new_logo.png";

import { Link } from "react-router-dom";
import { ScrollLink } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 90 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <>
      <nav className={`nav ${sticky ? "darkNav" : ""}`}>
        <img src={edelweisslogo} alt="" className="logo" />
        <ul>
          <li>Home</li>
          <li>
            <a href={biermenu} target="_blank">
              Bier Menu
            </a>
          </li>
          <li>
            <a href={cocktail} target="_blank">
              Cocktail Menu
            </a>
          </li>
          <li>
            <a href={food} target="_blank">
              Food Menu
            </a>
          </li>
          <li>Host an Event</li>
          <li>Gallery</li>
          <li>Larry Roberts Live</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
