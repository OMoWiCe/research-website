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
              <ul>
                <li>
                  <span>Purpose:</span> Data collection is conducted exclusively
                  for academic research to evaluate WiFi and Cellular
                  signal-based occupancy monitoring techniques.
                </li>
                <li>
                  <span>Data Scope:</span> Only publicly broadcasted and
                  available data is used. No attempt is made to decrypt or
                  access encrypted communications.
                </li>
                <li>
                  <span>Data Protection:</span> All identifiers (e.g., MAC
                  addresses) are obfuscated using salted hashing prior to
                  transmission.
                </li>
                <li>
                  <span>Transmission Security:</span> Data is transmitted over
                  encrypted channels to prevent interception or misuse.
                </li>
                <li>
                  <span>User Tracking:</span> The system does not track or
                  identify individuals. All data is processed in aggregate for
                  occupancy estimation only.
                </li>
              </ul>
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
