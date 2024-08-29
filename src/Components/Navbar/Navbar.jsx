import React, { useEffect, useState } from "react";
import "./Navbar.css";
import edelweisslogo from "../../assests/Flattend_new_logo.png";

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
          <li>Beer Menu</li>
          <li>Cocktail Menu</li>
          <li>Food Menu</li>
          <li>Host an Event</li>
          <li>Gallery</li>
          <li>Larry Roberts Live</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
