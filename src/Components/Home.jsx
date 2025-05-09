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
          </h1>
          <p className="home-description">
            A Research on Occupancy Monitoring Discover how we're transforming
            real-time space awareness using passive Wi-Fi and cellular signal
            analysis to deliver scalable, privacy-respecting and cost-effective
            occupancy monitoring systems.
          </p>
        </div>
        <div className="home-image">
          <img
            src="https://placehold.co/600x400"
            alt="Occupancy Monitoring"
            className="home-image-placeholder"
          />
        </div>
      </div>
    </section>
  );
};
