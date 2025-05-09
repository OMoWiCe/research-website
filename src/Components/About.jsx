import React from "react";
import "../css/About.css";

export const About = () => {
  const technologies = [
    { name: "React", link: "https://reactjs.org/" },
    { name: "Node.js", link: "https://nodejs.org/" },
    { name: "Azure", link: "https://azure.microsoft.com/" },
    {
      name: "SQL Server",
      link: "https://learn.microsoft.com/en-us/sql/sql-server/",
    },
    { name: "Wireshark", link: "https://www.wireshark.org/" },
    { name: "HackRF", link: "https://greatscottgadgets.com/hackrf/" },
  ];

  return (
    <section id="about" className="about-section">
      <h2 className="about-heading">About</h2>

      {/* Row 1: About + Disclaimer */}
      <div className="about-row">
        <div className="about-card">
          <h3 className="about-title">📖 About</h3>
          <p className="about-text">
            Our research aims to create a novel, real-time occupancy monitoring
            solution by leveraging existing wireless infrastructures. Through
            passive packet sniffing of Wi-Fi and cellular networks, we offer a
            non-intrusive and efficient method to estimate occupancy, helping
            improve public safety, facility management, and data-driven planning
            in developing countries.
          </p>
        </div>

        <div className="about-card">
          <h3 className="about-title">📘 Disclaimer</h3>
          <p className="about-text">
            This dashboard is for academic research. Occupancy visualizations
            rely on simulation environments and may not reflect live or
            production-grade accuracy.
          </p>
        </div>
      </div>

      {/* Row 2: Objectives + Significance + Technology Used */}
      <div className="about-row">
        <div className="about-card">
          <h3 className="about-title">🎯 Objectives</h3>
          <ul className="about-list">
            <li>Develop a cost-effective and scalable monitoring system</li>
            <li>
              Utilize ambient Wi-Fi and cellular traffic for occupancy
              estimation
            </li>
            <li>Maintain privacy and ensure data anonymization</li>
            <li>Provide real-time metrics via API and dashboard</li>
            <li>Conduct field validation in diverse environments</li>
          </ul>
        </div>

        <div className="about-card">
          <h3 className="about-title">🌍 Significance</h3>
          <ul className="about-list">
            <li>
              Reduces dependency on expensive hardware like cameras and sensors
            </li>
            <li>Enhances public space planning and emergency preparedness</li>
            <li>Enables sustainable energy and space usage</li>
            <li>Tailored for deployment in resource-constrained settings</li>
          </ul>
        </div>

        <div className="about-card">
          <h3 className="about-title">🛠️ Technology Used</h3>
          <div className="tech-container">
            {technologies.map((tech) => (
              <a
                key={tech.name}
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-btn"
              >
                {tech.name}
              </a>
            ))}
          </div>
          <p className="github-link">
            GitHub:{" "}
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/your-repo
            </a>
          </p>
        </div>
      </div>

      {/* Row 3: Key Features + Future Work */}
      <div className="about-row">
        <div className="about-card">
          <h3 className="about-title">✨ Key Features</h3>
          <ul className="about-list">
            <li>Real-time occupancy insights</li>
            <li>Wi-Fi and cellular traffic-based estimation</li>
            <li>Public and admin dashboards with live data</li>
            <li>RESTful API for integration</li>
            <li>Privacy-first approach (no personal data captured)</li>
          </ul>
        </div>

        <div className="about-card">
          <h3 className="about-title">🔮 Future Work</h3>
          <ul className="about-list">
            <li>Apply machine learning for predictive occupancy modeling</li>
            <li>Enhance device filtering</li>
            <li>Launch mobile app for real-time user access</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
