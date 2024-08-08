import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbarContainer">
        <img src="{logo}" alt="" />
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Events</li>
          <li>Reservations</li>
          <li>Gallery</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
