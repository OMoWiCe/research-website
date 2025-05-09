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
      link: "https://scholar.google.com.au/citations?user=H0twqLkAAAAJ&hl=en",
    },
    {
      name: "Dr. Nuwan Kuruwitaarachchi",
      role: "Co-Supervisor",
      image: "https://placehold.co/400x400",
      link: "https://scholar.google.com/citations?user=bb1ZTwsAAAAJ&hl=en",
    },
    {
      name: "V. O. Gallage",
      role: "Team Member",
      image: "https://placehold.co/400x400",
      link: "",
    },
    {
      name: "R. A. H. S. Thathsarani",
      role: "Team Member",
      image: "https://placehold.co/400x400",
      link: "",
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
