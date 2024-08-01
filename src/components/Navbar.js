import React, { useState } from "react";
import "../components/Navbar.css";

import { Link } from "react-router-dom";
export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="Navbar">
        <div className="NavbarContainer">
          <Link to="/" className="NavbarLogo"></Link>

          <Link to="/">Home</Link>
          <Link to="/">Menu</Link>
          <Link to="/">Events</Link>
          <Link to="/">Reservations</Link>
          <Link to="/">Gallery</Link>
        </div>
      </nav>
    </>
  );
}
