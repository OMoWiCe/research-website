import React, { useState } from "react";

const Footer = () => {
  const [showPolicy, setShowPolicy] = useState(false);

  const footerStyle = {
    backgroundColor: "#0f0f0f",
    color: "#e0f2fe",
    textAlign: "center",
    padding: "20px",
    fontFamily: "sans-serif",
    fontSize: "14px",
    position: "relative",
  };

  const linkStyle = {
    color: "#60a5fa",
    textDecoration: "underline",
    cursor: "pointer",
    marginLeft: "10px",
  };

  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  };

  const modalStyle = {
    backgroundColor: "#1e293b",
    color: "#fff",
    padding: "30px",
    borderRadius: "10px",
    maxWidth: "400px",
    textAlign: "left",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.5)",
  };

  const closeBtnStyle = {
    backgroundColor: "#ef4444",
    border: "none",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "20px",
    float: "right",
  };

  return (
    <>
      <footer style={footerStyle}>
        © {new Date().getFullYear()} oMoWiCe. All rights reserved.
        <span style={linkStyle} onClick={() => setShowPolicy(true)}>
          Privacy Policy
        </span>
      </footer>

      {showPolicy && (
        <div style={modalOverlayStyle}>
          <div style={modalStyle}>
            <h3>🔒 Privacy Policy</h3>
            <p style={{ marginTop: "10px", lineHeight: "1.5" }}>
              We value your privacy. This project does not store personal data and is strictly used
              for academic and research purposes. Any data shown is simulated or anonymized.
            </p>
            <button style={closeBtnStyle} onClick={() => setShowPolicy(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
