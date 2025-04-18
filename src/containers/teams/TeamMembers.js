import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/ui/section-titles/SectionTitle";

const members = [
  
  {
    name: "MR.BALAJI SELVARAJ",
    position: "CHIEF EXECUTIVE OFFICER",
    description:
      "Mr.Balaji has strategic oversight of the company’s broad investment portfolio and special projects at the group level. He had been a board member of various investment companies and various other companies in the past and is mandated to develop Wish Group investment’s policies, establish investment guidelines, and review proposed projects and investments to ensure they are in line with business objectives.",
    image: "images/team/md-img/balaji.png",
    // social: {
    //   facebook: "#",
    //   twitter: "#",
    //   google: "#",
    //   youtube: "#",
    // },
  },
  {
    name: "Mr. SHYAM SUNDAR",
    position: "CHIEF FINANCIAL OFFICER",
    description:
      "Mr. Shyam is a result-oriented finance professional with over 25 years of extensive experience in financial control, treasury management, acquisitions and exits. He provides strategic financial direction to the organization, aligned with the business strategy and actively participates in the organization’s decision-making process. He has a bottom-line driven approach that is focused on delivering results. ",
    image: "images/team/md-img/shyam.png",
    // social: {
    //   facebook: "#",
    //   twitter: "#",
    //   google: "#",
    //   youtube: "#",
    // },
  },
  {
    name: "Mr. DINESH KUMAR SABHARWAL",
    position: "LEGAL CONSULTANT",
    description:
      "With 30 years of experience, Dinesh Kumar Sabharwal has established a reputation for delivering exceptional legal and financial advisory services to a diverse clientele, including multinational corporations, SMEs, and high-net-worth individuals. As both an advocate and a chartered accountant, Dinesh Kumar Sabharwal offers a unique blend of legal acumen and financial expertise, ensuring comprehensive and strategic solutions for complex business challenges. ",
    image: "images/team/md-img/dinesh.png",
    // social: {
    //   facebook: "#",
    //   twitter: "#",
    //   google: "#",
    //   youtube: "#",
    // },
  },
];

const TeamMembers = () => {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMemberIndex((prevIndex) => (prevIndex + 1) % members.length);
    }, 5000); // change member every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentMember = members[currentMemberIndex];

  return (
    <div className="members">
      <SectionTitle
        title="Our Team"
        text="Meet the talented individuals behind our project. Our diverse team brings expertise from various fields, working together to drive innovation in the crypto space."
      />
      <div className="member-card">
        <div className="team-members">
          <div className="member-image">
            <img src={currentMember.image} alt={currentMember.name} />
          </div>
          <div className="member-details">
            <h2>{currentMember.name}</h2>
            <h3>{currentMember.position}</h3>
            <p>{currentMember.description}</p>
            {/* <div className="social-links">
              <a href={currentMember.social.facebook}>facebook</a>
              <a href={currentMember.social.twitter}>twitter</a>
              <a href={currentMember.social.google}>google</a>
              <a href={currentMember.social.youtube}>youtube</a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
