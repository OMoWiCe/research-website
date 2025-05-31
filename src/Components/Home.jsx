import React from "react";
import "../css/Home.css";

export const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">
            Occupancy Monitoring <br />
            with <span className="accent-text">Wi-Fi</span> &{" "}
            <span className="accent-text">Cellular</span>
          </h1>{" "}
          <p className="home-description">
            A Research on Occupancy Monitoring Discover how we're transforming
            real-time space awareness using passive Wi-Fi and cellular signal
            analysis to deliver scalable, privacy-respecting and cost-effective
            occupancy monitoring systems.
          </p>
        </div>
        <div className="home-image">
          <img
            src="./images/landing-image.png"
            alt="Occupancy Monitoring"
            className="home-image-placeholder"
          />
        </div>
      </div>
      <div className="home-results">
        <h3 className="results-title">Project Results</h3>
        <p className="results-text">
          Mean Error (MPE): <span>-14.67%</span>
          <div className="restults-subtext">
            Underestimate Occupancy by 14.67% on average
          </div>
        </p>
      </div>
    </section>
  );
};
