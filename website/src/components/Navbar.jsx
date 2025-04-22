import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/demo" className="nav-link">Demo</Link>
        <Link to="/team" className="nav-link">Team</Link>
      </div>
    </nav>
  );
}

export default Navbar;
