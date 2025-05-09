import React, { useState } from "react";
import "../css/Footer.css";

const Footer = () => {
  const [showPolicy, setShowPolicy] = useState(false);

  return (
    <>
      <footer className="footer">
        © {new Date().getFullYear()} OMoWiCe
        <span>|</span>
        <span className="footer-link" onClick={() => setShowPolicy(true)}>
          Privacy Policy
        </span>
      </footer>

      {showPolicy && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>🔒 Privacy Policy</h3>
            <p className="modal-content">
              We value your privacy. This project does not store personal data
              and is strictly used for academic and research purposes only. Any
              data shown is simulated or anonymized.
            </p>
            <button className="close-btn" onClick={() => setShowPolicy(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
