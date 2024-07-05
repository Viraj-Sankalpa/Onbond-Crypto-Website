import React from 'react';
import '../../assets/scss/blocks/RoadMap.scss';
import RoadmapItem from './RoadmapItem';

const Roadmap = ({ items }) => {
  return (
    <div className="roadmap">
      {items.map((item, index) => (
        <RoadmapItem
          key={index}
          title={item.title}
          description={item.description}
          number={item.number}
        />
      ))}
    </div>
  );
};

export default Roadmap;
