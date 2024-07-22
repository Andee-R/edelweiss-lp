import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="navbar-container">
        <div>
          <a src="#">logo</a>
        </div>
        <span className="d-flex justify-content-between">
          <a href="/">Home</a>
          <a href="/">Menu</a>
          <a href="/">Events</a>
          <a href="/">Reservations</a>
          <a href="/">Gallery</a>
        </span>
      </div>
    </nav>
  );
}
