import React from 'react';
import '../../assets/scss/blocks/TimelineComponent.scss';

const events = [
  { id: 1, date: '2nd Quarter of 2025', content: 'One Bond Wallet' },
  { id: 2, date: '4th Quarter of 2025', content: 'One Bond Block Chain' },
  { id: 3, date: '1st Quarter of 2026', content: 'DEZTA – Social Media App' },
  { id: 3, date: '4th Quarter of 2026', content: 'One Bond Exchange (Exallone)' },
  { id: 3, date: '2nd Quarter of 2027', content: 'One Bond Bank' },
  { id: 3, date: '4th Quarter of 2027', content: 'One Bond Card' },
 
  // Add more events as needed
];

const TimelineComponent = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      {events.map((event, index) => (
        <div
          key={event.id}
          className={`timeline-event ${index % 2 === 0 ? 'left' : 'right'}`}
        >
          <div className="timeline-date">{event.date}</div>
          <div className="timeline-content">{event.content}</div>
        </div>
      ))}
    </div>
  );
};

export default TimelineComponent;
