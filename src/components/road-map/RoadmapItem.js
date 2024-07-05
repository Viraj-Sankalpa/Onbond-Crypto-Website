import React from "react";
import { useInView } from "react-intersection-observer";
import "../../assets/scss/blocks/RoadmapItem.scss";

const RoadmapItem = ({ title, description, number }) => {
  const { ref, inView, entry } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`roadmap-item ${inView ? "in-view" : ""}`}>
      <div className="roadmap-item-content">
        <div className="roadmap-item-number">{number}</div>
        <h2 className="roadmap-item-title">{title}</h2>
        <p className="roadmap-item-description">{description}</p>
      </div>
    </div>
  );
};

export default RoadmapItem;
