import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <header className="Header">
      <a src="/">logo</a>
      <nav className="Navbar">
        <a href="/">Home</a>
        <a href="/">Menu</a>
        <a href="/">Events</a>
        <a href="/">Reservations</a>
        <a href="/">Gallery</a>
      </nav>
    </header>
  );
}
