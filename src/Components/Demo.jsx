import React from "react";

export const Demo = () => {
  const sectionStyle = {
    backgroundColor: "#0a0a0a",
    color: "#fff",
    padding: "60px 40px",
    borderRadius: "20px",
    margin: "60px auto",
    maxWidth: "1200px",
    display: "flex",
    flexDirection: "column",
    fontFamily: "sans-serif",
    gap: "30px",
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    borderBottom: "2px solid #444",
    paddingBottom: "10px",
  };

  const contentRow = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "20px",
  };

  const textBox = {
    flex: "1 1 45%",
    minWidth: "280px",
    background: "linear-gradient(to bottom right, #0f172a, #071937)",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 0 12px rgba(0, 0, 0, 0.3)",
  };

  const videoBox = {
    flex: "1 1 50%",
    minWidth: "300px",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 0 12px rgba(0, 0, 0, 0.3)",
  };

  const buttonStyle = {
    marginTop: "20px",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    background: "linear-gradient(to right, #3b82f6, #06b6d4)",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
    textDecoration: "none",
    display: "inline-block",
  };

  const paragraphStyle = {
    lineHeight: "1.6",
    fontSize: "16px",
  };

  return (
    <section id="demo" style={sectionStyle}>
      <h2 style={headingStyle}>🎬 Demo</h2>

      <div style={contentRow}>
        {/* Left: Description + Button */}
        <div style={textBox}>
          <p style={paragraphStyle}>
          Our interactive demo presents a live dashboard visualizing 
          real-time occupancy data from test locations. Users can observe 
          metrics such as estimated counts, trends, and device activity over
           time, with clear and intuitive graphical representations.
          </p>

          <a
            href="https://your-dashboard-link.com"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
          >
            🚀 Demo Dashboard
          </a>
        </div>

        {/* Right: Video */}
        <div style={videoBox}>
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
