import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import edelweisslogo from "../../assets/Flattend_new_logo.png";
import biermenu from "../../assets/biermenu.pdf";
import cocktail from "../../assets/cocktails.pdf";
import food from "../../assets/foodmenu.pdf";
import { Dropdown } from "bootstrap";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 90 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`nav ${sticky ? "darkNav" : ""}`}>
      <Link to="/home">
        <img src={edelweisslogo} alt="" className="logo" />
      </Link>

      <ul className="menuLinks">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to={biermenu} target="_blank">
            Bier Menu
          </Link>
        </li>
        <li>
          <Link to={cocktail} target="_blank">
            Cocktail Menu
          </Link>
        </li>
        <li>
          <Link to={food} target="_blank">
            Food Menu
          </Link>
        </li>
        <li>
          <Link to="/events">Host an Event</Link>
        </li>

        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/resident">Larry Roberts Live</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
