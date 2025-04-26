import React, { useState, useEffect } from "react";

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

  const navStyle = {
    backgroundColor: "#0f0f0f",
    padding: "0.8rem 1.5rem",
    color: "#fff",
    fontFamily: "sans-serif",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 10px rgba(0,0,0,0.6)",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const logoStyle = {
    color: "#fff",
    fontSize: "1.6rem",
    fontWeight: "bold",
    textDecoration: "none",
    letterSpacing: "1px",
  };

  const menuWrapper = {
    display: isMobile ? (menuOpen ? "block" : "none") : "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "center",
    alignItems: "center",
    gap: isMobile ? "1rem" : "2rem",
    listStyle: "none",
    margin: 0,
    padding: isMobile ? "1rem 0" : 0,
    backgroundColor: isMobile ? "#1a1a1a" : "transparent",
    borderRadius: isMobile ? "10px" : "0",
    boxShadow: isMobile ? "0 6px 16px rgba(0,0,0,0.3)" : "none",
    textAlign: isMobile ? "center" : "left",
  };

  const linkStyle = {
    color: "#e0f2fe",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "500",
    whiteSpace: "nowrap",
    transition: "color 0.3s ease",
  };

  const iconStyle = {
    fontSize: "28px",
    background: "transparent",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    display: isMobile ? "block" : "none",
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <a href="#home" style={logoStyle}>oMoWiCe</a>

        <button onClick={() => setMenuOpen(!menuOpen)} style={iconStyle}>
          ☰
        </button>

        <ul style={menuWrapper} onClick={() => isMobile && setMenuOpen(false)}>
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <a href={item.link} style={linkStyle}>
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
