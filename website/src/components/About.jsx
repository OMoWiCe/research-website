import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <section className="about-intro">
        <h2>About the Project</h2>
        <p>
          This project explores innovative approaches for occupancy monitoring using Wi-Fi and
          cellular infrastructure. It integrates hardware like Raspberry Pi and SDR modules with
          cloud computing through Microsoft Azure to enable real-time occupancy data capture,
          analysis, and visualization.
        </p>
        <div className="disclaimer">
          <h4>Disclaimer</h4>
          <p>
            All data collected is anonymized and privacy-preserving. MAC addresses and IMSIs are not
            stored or used for personal identification.
          </p>
        </div>
      </section>

      <div className="card-row">
        <div className="card">
          <h4>Objectives</h4>
          <ul>
            <li>Capture real-time occupancy data</li>
            <li>Enable better resource allocation</li>
            <li>Support urban planning initiatives</li>
          </ul>
        </div>

        <div className="card">
          <h4>Significance</h4>
          <ul>
            <li>Encourages efficient public space use</li>
            <li>Enables data-driven decisions</li>
            <li>Applies to smart cities development</li>
          </ul>
        </div>

        <div className="card">
          <h4>Future Works</h4>
          <ul>
            <li>Integrate ML for occupancy prediction</li>
            <li>Enhance user interfaces</li>
            <li>Expand to multi-site deployment</li>
          </ul>
        </div>
      </div>

      <div className="card-row">
        <div className="card">
          <h4>Key Features</h4>
          <ul>
            <li>Live dashboard with analytics</li>
            <li>Secure data transmission</li>
            <li>Scalable and modular system</li>
          </ul>
        </div>

        <div className="card tech-card">
          <h4>Technology Used</h4>
          <div className="tools">
            <a href="https://www.raspberrypi.com/" target="_blank" rel="noopener noreferrer">Raspberry Pi</a>
            <a href="https://greatscottgadgets.com/hackrf/" target="_blank" rel="noopener noreferrer">HackRF One</a>
            <a href="https://azure.microsoft.com/" target="_blank" rel="noopener noreferrer">Azure</a>
            <a href="https://powerbi.microsoft.com/" target="_blank" rel="noopener noreferrer">Power BI</a>
          </div>
          <p>GitHub: <a href="#">github.com/your-repo</a></p>
        </div>
      </div>
    </div>
  );
}

export default About;
