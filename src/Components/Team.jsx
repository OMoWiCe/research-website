import React from "react";
import "../css/Team.css";

export const Team = () => {
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
      image: "https://placehold.co/400x400",
      link: "https://github.com/lakshan",
    },
    {
      name: "Dr. Nuwan Kuruwitaarachchi",
      role: "Co-Supervisor",
      image: "https://placehold.co/400x400",
      link: "https://github.com/nimal",
    },
    {
      name: "V. O. Gallage",
      role: "Team Member",
      image: "https://placehold.co/400x400",
      link: "https://sasindu.dev",
    },
    {
      name: "R. A. H. S. Thathsarani",
      role: "Team Member",
      image: "https://placehold.co/400x400",
      link: "https://dribbble.com/dilshan",
    },
  ];

  return (
    <section id="team" className="team-section">
      <h2 className="team-heading">👨‍💻 Our Team</h2>
      <div className="team-grid">
        {members.map((member, index) => (
          <div
            key={index}
            className="team-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="image-container">
              <img
                src={member.image}
                alt={member.name}
                className="member-image"
              />
              <div className="overlay">
                <a
                  href={member.link}
                  target="_blank"
                  rel="noreferrer"
                  className="profile-link"
                >
                  🔗 Visit Profile
                </a>
              </div>
            </div>
            <div className="member-name">{member.name}</div>
            <div className="member-role">{member.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
