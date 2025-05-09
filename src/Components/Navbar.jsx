import React, { useState, useEffect } from "react";
import "../css/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Demo", link: "#demo" },
    { name: "Team", link: "#team" },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          OMoWiCe
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="navbar-menu-icon"
        >
          ☰
        </button>

        <ul
          className={`navbar-menu ${isMobile ? "mobile" : ""} ${
            isMobile && !menuOpen ? "closed" : ""
          }`}
          onClick={() => isMobile && setMenuOpen(false)}
        >
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              onClick={() => {
                document
                  .querySelector(item.link)
                  .scrollIntoView({ behavior: "smooth" });
                isMobile && setMenuOpen(false);
              }}
              style={{ cursor: "pointer" }}
            >
              <a href={item.link} className="navbar-link">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
