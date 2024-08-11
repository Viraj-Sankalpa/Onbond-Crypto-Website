import { motion } from 'framer-motion';
import React from 'react';
import '../../assets/scss/blocks/NewTeam.scss';
import SectionTitle from '../ui/section-titles/SectionTitle';

const teamMembers = [
  {
    name: 'MR.BALAJI SELVARAJ',
    role: 'CHIEF EXECUTIVE OFFICER',
    imageUrl: '/images/team/md-img/balaji.png' // replace with actual path
  },
  {
    name: 'Mr. DINESH KUMAR SABHARWAL',
    role: 'LEGAL CONSULTANT',
    imageUrl: '/images/team/md-img/dinesh.png' // replace with actual path
  },
  {
    name: 'Mr. SHYAM SUNDAR',
    role: 'CHIEF FINANCIAL OFFICER',
    imageUrl: '/images/team/md-img/shyam.png' // replace with actual path
  }
];

const Team = () => {
  return (
    <div className='new-team-container'>
      <SectionTitle
            title="Our Team"
            text="Meet the talented individuals behind our project. Our diverse team brings expertise from various fields, working together to drive innovation in the crypto space."
          />
    <div className="team-container">
      {teamMembers.map((member, index) => (
        <motion.div
          key={index}
          className="team-member"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={member.imageUrl} alt={member.name} className="team-member-image"/>
          <div className="team-member-info">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        </motion.div>
      ))}
    </div>
    </div>
  );
};

export default Team;
