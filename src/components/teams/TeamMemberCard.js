import { motion } from 'framer-motion';
import React from 'react';
import '../../assets/scss/blocks/TeamMemberCard.scss';

const TeamMemberCard = ({ member }) => {
  return (
    <motion.div
      className="team-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="team-card__header">
        <img src={member.photo} alt={member.name} className="team-card__photo" />
        <img src="/images/logo/1.gif" alt="Company Logo" className="team-card__logo" />
      </div>
      <div className="team-card__info">
        <h3 className="team-card__name">{member.name}</h3>
        <p className="team-card__designation">{member.designation}</p>
        <p className="team-card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href={`mailto:${member.contact}`} className="team-card__contact">
          <img src="/images/team/md-img/mail.svg" alt="Contact" />
        </a>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
