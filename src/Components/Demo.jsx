import React from "react";
import "../css/Demo.css";

export const Demo = () => {
  return (
    <section id="demo" className="demo-section">
      <h2 className="demo-heading">🎬 Demo</h2>

      <div className="demo-content-row">
        {/* Left: Description + Button */}
        <div className="demo-text-box">
          <p className="demo-paragraph">
            Our interactive demo presents a live dashboard visualizing real-time
            occupancy data from test locations. Users can observe metrics such
            as estimated counts, trends, and turnover time, with clear and
            intuitive graphical representations.
          </p>

          <a
            href="https://dashboard.omowice.live/"
            target="_blank"
            rel="noopener noreferrer"
            className="demo-button"
          >
            🚀 Demo Dashboard
          </a>
        </div>

        {/* Right: Video */}
        <div className="demo-video-box">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};
