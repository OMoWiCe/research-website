import React from "react";

export const About = () => {
  const sectionStyle = {
    backgroundColor: "#0a0a0a",
    color: "#fff",
    padding: "60px 40px",
    borderRadius: "20px",
    margin: "60px auto",
    maxWidth: "1200px",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    fontFamily: "sans-serif",
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    borderBottom: "2px solid #444",
    paddingBottom: "10px",
  };

  const rowStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "20px",
  };

  const cardStyle = {
    flex: "1 1 30%",
    minWidth: "250px",
    background: "linear-gradient(to bottom right, #0f172a, #071937)",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 0 12px rgba(0, 0, 0, 0.3)",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "10px",
  };

  const listStyle = {
    margin: 0,
    paddingLeft: "18px",
    lineHeight: "1.7",
  };

  const techBtnStyle = {
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "8px 14px",
    margin: "6px",
    cursor: "pointer",
    fontSize: "14px",
    textDecoration: "none",
    display: "inline-block",
  };

  const technologies = [
    { name: "React", link: "https://reactjs.org/" },
    { name: "Node.js", link: "https://nodejs.org/" },
    { name: "Azure", link: "https://azure.microsoft.com/" },
    { name: "SQL Server", link: "https://learn.microsoft.com/en-us/sql/sql-server/" },
    { name: "Wireshark", link: "https://www.wireshark.org/" },
    { name: "HackRF", link: "https://greatscottgadgets.com/hackrf/" },
  ];

  return (
    <section id="about" style={sectionStyle}>
      <h2 style={headingStyle}>About</h2>

      {/* Row 1: About + Disclaimer */}
      <div style={rowStyle}>
        <div style={cardStyle}>
          <h3 style={titleStyle}>📖 About</h3>
          <p style={{ lineHeight: "1.6" }}>
          Our research aims to create a novel, real-time occupancy monitoring 
          solution by leveraging existing wireless infrastructures. Through passive 
          packet sniffing of Wi-Fi and cellular networks, we offer a non-intrusive and
           efficient method to estimate occupancy, helping improve public safety, facility
            management, and data-driven planning in developing countries.
          </p>
        </div>

        <div style={cardStyle}>
          <h3 style={titleStyle}>📘 Disclaimer</h3>
          <p style={{ lineHeight: "1.6" }}>
            This dashboard is for academic research. Occupancy visualizations rely on simulation
            environments and may not reflect live or production-grade accuracy.
          </p>
        </div>
      </div>

      {/* Row 2: Objectives + Significance + Technology Used */}
      <div style={rowStyle}>
        <div style={cardStyle}>
          <h3 style={titleStyle}>🎯 Objectives</h3>
          <ul style={listStyle}>
            <li>Develop a cost-effective and scalable monitoring system</li>
            <li>Utilize ambient Wi-Fi and cellular traffic for occupancy estimation</li>
            <li>Maintain privacy and ensure data anonymization</li>
            <li>Provide real-time metrics via API and dashboard</li>
            <li>Conduct field validation in diverse environments</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3 style={titleStyle}>🌍 Significance</h3>
          <ul style={listStyle}>
            <li>Reduces dependency on expensive hardware like cameras and sensors</li>
            <li>Enhances public space planning and emergency preparedness</li>
            <li>Enables sustainable energy and space usage</li>
            <li>Tailored for deployment in resource-constrained settings</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3 style={titleStyle}>🛠️ Technology Used</h3>
          <div style={{ textAlign: "center" }}>
            {technologies.map((tech) => (
              <a
                key={tech.name}
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
                style={techBtnStyle}
              >
                {tech.name}
              </a>
            ))}
          </div>
          <p style={{ fontSize: "14px", marginTop: "12px", textAlign: "center" }}>
            GitHub:{" "}
            <a
              href="https://github.com/your-repo"
              style={{ color: "#60a5fa", textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/your-repo
            </a>
          </p>
        </div>
      </div>

      {/* Row 3: Key Features + Future Work */}
      <div style={rowStyle}>
        <div style={cardStyle}>
          <h3 style={titleStyle}>✨ Key Features</h3>
          <ul style={listStyle}>
            <li>Real-time occupancy insights</li>
            <li>Wi-Fi and cellular traffic-based estimation</li>
            <li>Public and admin dashboards with live data</li>
            <li>RESTful API for integration</li>
            <li>Privacy-first approach (no personal data captured)</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3 style={titleStyle}>🔮 Future Work</h3>
          <ul style={listStyle}>
            <li>Apply machine learning for predictive occupancy modeling</li>
            <li>Enhance device filtering</li>
            <li>Launch mobile app for real-time user access</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
