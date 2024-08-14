import React, { useEffect, useState } from "react";
import "./Navbar.css";
import edelweisslogo from "../../assests/edelweisslogo.png";

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
          <li>Menu</li>
          <li>Events</li>
          <li>Reservations</li>
          <li>Gallery</li>
          <li>
            <button className="btn ">Order Here!</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
