import React from 'react';
import Slider from 'react-slick';
import '../../assets/scss/blocks/TeamCarousel.scss';
import TeamMemberCard from './TeamMemberCard';

const teamMembers = [
  {
    id: 1,
    name: 'MR.ASAID AHMED ARABI MOULANA',
    designation: 'CHAIRMAN',
    photo: '/images/team/md-img/9.jpg',
    contact: 'john.doe@example.com',
  },
  {
    id: 2,
    name: 'MR.BALAJI SELVARAJ',
    designation: 'CHIEF EXECUTIVE OFFICER',
    photo: '/images/team/md-img/7.jpg',
  },
  {
    id: 2,
    name: 'Mr.Shyam Sundar',
    designation: 'Chief Financial Officer',
    photo: '/images/team/md-img/8.jpg',
    contact: 'jane.smith@example.com',
  },
  // Add more team members as needed
];

const TeamCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
  };

  return (
    <Slider {...settings}>
      {teamMembers.map((member) => (
        <div key={member.id}>
          <TeamMemberCard member={member} />
        </div>
      ))}
    </Slider>
  );
};

export default TeamCarousel;
