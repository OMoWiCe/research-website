import React from "react";
import "../css/Team.css";

export const Team = () => {
  const members = [
    {
      name: "Dr. Nuwan Kuruwitaarachchi",
      role: "Main Supervisor",
      workplace: "Senior Lecturer - Department of ICT",
      addressline01: "Faculty of Technology",
      addressline02: "University of Sri Jayewardenepura",
      image: "./images/dr-nuwan-kuruwitaarachchi.jpg",
      link: "https://scholar.google.com/citations?user=bb1ZTwsAAAAJ&hl=en",
    },
    {
      name: "Dr. Nimal Skandakumara",
      role: "Co-Supervisor",
      workplace: "Cyber Security Training Coordinator,",
      addressline01: "NSW Department of Customer Service",
      addressline02: "New South Wales, Australia",
      image: "./images/dr-nimal-skandakumara.jpeg",
      link: "https://scholar.google.com.au/citations?user=H0twqLkAAAAJ&hl=en",
    },
    {
      name: "Vinura Gallage",
      role: "Team Member",
      workplace: "Networking Technology - Department of ICT",
      addressline01: "Faculty of Technology",
      addressline02: "University of Sri Jayewardenepura",
      image: "./images/vinura-gallage.jpg",
      link: "",
    },
    {
      name: "Hashini Sugandika",
      role: "Team Member",
      workplace: "Networking Technology - Department of ICT",
      addressline01: "Faculty of Technology",
      addressline02: "University of Sri Jayewardenepura",
      image: "./images/hashini-sugandika.jpg",
      link: "",
    },
  ];
  return (
    <section id="team" className="team-section">
      <h2 className="team-heading">👨‍💻 Our Team</h2>
      <div className="team-list">
        {members.map((member, index) => (
          <div key={index} className="team-card-horizontal">
            <div className="image-container-small">
              <img
                src={member.image}
                alt={member.name}
                className="member-image-small"
              />
            </div>
            <div className="member-info">
              <div className="member-name">{member.name}</div>
              <div className="member-role">{member.role}</div>
              <div className="member-workplace">{member.workplace}</div>
              <div className="member-address">{member.addressline01}</div>
              <div className="member-address">{member.addressline02}</div>
              {member.link && (
                <a
                  href={member.link}
                  target="_blank"
                  rel="noreferrer"
                  className="profile-link-inline"
                >
                  Google Scholar Profile
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
