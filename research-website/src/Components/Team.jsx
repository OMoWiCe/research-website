import React from "react";

export const Team = () => {
  const sectionStyle = {
    backgroundColor: "#0a0a0a",
    color: "#fff",
    padding: "60px 40px",
    borderRadius: "20px",
    margin: "60px auto",
    maxWidth: "1200px",
    fontFamily: "sans-serif",
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    borderBottom: "2px solid #444",
    paddingBottom: "10px",
    marginBottom: "40px",
  };

  const teamGrid = {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    justifyContent: "space-around",
  };

  const cardStyle = {
    background: "linear-gradient(to bottom right, #0f172a, #071937)",
    borderRadius: "16px",
    padding: "16px",
    width: "200px",
    textAlign: "center",
    boxShadow: "0 0 12px rgba(0,0,0,0.3)",
    overflow: "hidden",
    position: "relative",
  };

  const imageContainer = {
    position: "relative",
    width: "100%",
    borderRadius: "12px",
    overflow: "hidden",
    marginBottom: "16px",
  };

  const imgStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "12px",
    display: "block",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "opacity 0.3s ease",
  };

  const nameStyle = {
    fontWeight: "bold",
    fontSize: "16px",
    color: "#e0e7ff",
  };

  const roleStyle = {
    fontSize: "14px",
    color: "#a1a1aa",
  };

  const linkStyle = {
    color: "#60a5fa",
    fontSize: "14px",
    backgroundColor: "#1e40af",
    padding: "6px 12px",
    borderRadius: "8px",
    textDecoration: "none",
  };

  const handleMouseEnter = (e) => {
    const overlay = e.currentTarget.querySelector(".overlay");
    if (overlay) overlay.style.opacity = 1;
  };

  const handleMouseLeave = (e) => {
    const overlay = e.currentTarget.querySelector(".overlay");
    if (overlay) overlay.style.opacity = 0;
  };

  const members = [
    {
      name: "Dr. Nimal Skandakumara",
      role: "Supervisor",
      image: "",
      link: "https://github.com/lakshan",
    },
    {
      name: "Dr. Nuwan Kuruwitaarachchi",
      role: "Co-Supervisor",
      image: "",
      link: "https://github.com/nimal",
    },
    {
      name: "V. O. Gallage",
      role: "Team Leader",
      image: "",
      link: "https://sasindu.dev",
    },
    {
      name: "R. A. H. S. Thathsarani",
      role: "Team Member",
      image: "",
      link: "https://dribbble.com/dilshan",
    },
  ];

  return (
    <section id="team" style={sectionStyle}>
      <h2 style={headingStyle}>👨‍💻 Our Team</h2>
      <div style={teamGrid}>
        {members.map((member, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div style={imageContainer}>
              <img src={member.image} alt={member.name} style={imgStyle} />
              <div className="overlay" style={{ ...overlayStyle }}>
                <a href={member.link} target="_blank" rel="noreferrer" style={linkStyle}>
                  🔗 Visit Profile
                </a>
              </div>
            </div>
            <div style={nameStyle}>{member.name}</div>
            <div style={roleStyle}>{member.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
