import React from "react";

export const Home = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: window.innerWidth <= 830 ? "column-reverse" : "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "60px 40px",
    margin: "60px auto",
    maxWidth: "1200px",
    borderRadius: "24px",
    background: "radial-gradient(circle at top left, #0f172a, #020617)",
    color: "#ffffff",
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
    position: "relative",
    overflow: "hidden",
  };

  const contentStyle = {
    flex: 1,
    paddingRight: "40px",
    zIndex: 2,
  };

  const titleStyle = {
    fontSize: "48px",
    fontWeight: "800",
    lineHeight: "1.2",
    marginBottom: "20px",
    background: "linear-gradient(90deg, #ffffff, #60a5fa)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const descriptionStyle = {
    fontSize: "18px",
    lineHeight: "1.7",
    marginBottom: "35px",
    color: "#e2e8f0",
    maxWidth: "95%",
  };

  const contactBtnStyle = {
    textDecoration: "none",
    background: "linear-gradient(to right, #3b82f6, #06b6d4)",
    color: "#fff",
    borderRadius: "999px",
    fontSize: "18px",
    fontWeight: "600",
    padding: "14px 28px",
    display: "inline-block",
    boxShadow: "0 8px 16px rgba(6, 182, 212, 0.4)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const contactBtnHover = {
    transform: "scale(1.05)",
    boxShadow: "0 12px 24px rgba(6, 182, 212, 0.6)",
  };

  const imageStyle = {
    flex: 1,
    textAlign: "center",
    fontSize: "20px",
    color: "#cbd5e1",
    zIndex: 2,
  };

  const abstractBGStyle = {
    content: '""',
    position: "absolute",
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    background: "radial-gradient(#1e3a8a, #0f172a)",
    opacity: 0.3,
    filter: "blur(100px)",
    top: "-100px",
    left: "-100px",
    zIndex: 0,
  };

  return (
    <section style={{ position: "relative", padding: "40px 0" }}>
      <div style={abstractBGStyle} />
      <div style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={titleStyle}>
            Occupancy Monitoring <br />
            with <span style={{ color: "#93c5fd" }}>Wi-Fi</span> &{" "}
            <span style={{ color: "#93c5fd" }}>Cellular</span>
          </h1>
          <p style={descriptionStyle}>
          Welcome to Our Research on Occupancy Monitoring
          Discover how we're transforming real-time space awareness 
          using passive Wi-Fi and cellular signal analysis to deliver 
          scalable, privacy-respecting occupancy monitoring systems.
          </p>
          
        </div>
        <div style={imageStyle}>
          <p>Prototype Image</p>
        </div>
      </div>
    </section>
  );
};
