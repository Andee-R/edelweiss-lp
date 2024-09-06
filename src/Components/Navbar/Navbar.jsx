import React, { useEffect, useState } from "react";
import "./Navbar.css";
import edelweisslogo from "../../assets/Flattend_new_logo.png";
import biermenu from "../../assets/biermenu.pdf";
import cocktail from "../../assets/cocktails.pdf";
import food from "../../assets/foodmenu.pdf";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 90 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`nav ${sticky ? "darkNav" : ""}`}>
      <img src={edelweisslogo} alt="" className="logo" />

      <ul className="menuLinks">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <a href={biermenu} target="_blank">
            Beer Menu
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
        <li>
          <Link to="/events">Host an Event</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          {" "}
          <Link to="/resident">Larry Roberts Live</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
