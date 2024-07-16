import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/ui/section-titles/SectionTitle";

const members = [
  {
    name: "MR.ASAID AHMED ARABI MOULANA",
    position: "CHAIRMAN",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus tincidunt ultrices. Ut quis blandit dolor. Ut laoreet sagittis arcu eu tristique.",
    image: "images/team/md-img/x.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      google: "#",
      youtube: "#",
    },
  },
  {
    name: "MR.BALAJI SELVARAJ",
    position: "CHIEF EXECUTIVE OFFICER",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus tincidunt ultrices. Ut quis blandit dolor. Ut laoreet sagittis arcu eu tristique.",
    image: "images/team/md-img/y.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      google: "#",
      youtube: "#",
    },
  },
  {
    name: "Mr. SHYAM SUNDAR",
    position: "CHIEF FINANCIAL OFFICER",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus tincidunt ultrices. Ut quis blandit dolor. Ut laoreet sagittis arcu eu tristique.",
    image: "images/team/md-img/z.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      google: "#",
      youtube: "#",
    },
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
        title="Our Members"
        text="We are working on a new way to invest in cryptocurrencies."
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
            <div className="social-links">
              <a href={currentMember.social.facebook}>facebook</a>
              <a href={currentMember.social.twitter}>twitter</a>
              <a href={currentMember.social.google}>google</a>
              <a href={currentMember.social.youtube}>youtube</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
