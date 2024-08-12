import React, { useState } from "react";
import "./Navbar.css";
import edelweisslogo from "../../assests/edelweisslogo.png";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
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
