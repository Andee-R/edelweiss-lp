import React, { useEffect, useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import edelweisslogo from "../../assets/Flattend_new_logo.png";
import biermenu from "../../assets/biermenu.pdf";
import cocktail from "../../assets/cocktails.pdf";
import food from "../../assets/foodmenu.pdf";

import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 90 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav ref={navRef} className={`nav ${sticky ? "darkNav" : ""}`}>
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
        <button onClick={showNavbar}>
          <FaBars />
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
