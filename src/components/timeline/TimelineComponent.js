import React, { useEffect, useState } from 'react';
import '../../assets/scss/blocks/TimelineComponent.scss';

const events = [
  { id: 1, date: '2nd Quarter of 2025', content: 'One Bond Wallet ' },
  { id: 2, date: '4th Quarter of 2025', content: 'One Bond Block Chain.' },
  { id: 3, date: '1st Quarter of 2026', content: 'DEZTA – Social Media App. ' },
  { id: 4, date: '4th Quarter of 2026', content: 'One Bond Exchange (Exallone)' },
  { id: 5, date: '2nd Quarter of 2027', content: 'One Bond Bank.' },
  { id: 6, date: '4th Quarter of 2027', content: 'One Bond Card.' },
  // Add more events as needed
];

const TimelineComponent = () => {
  const [beamHeight, setBeamHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const timelineContainer = document.querySelector('.timeline-container');
      const timelineEvents = document.querySelectorAll('.timeline-event');
      if (timelineContainer && timelineEvents.length > 0) {
        const containerTop = timelineContainer.getBoundingClientRect().top + window.scrollY;
        const scrollY = window.scrollY + window.innerHeight;
        let newHeight = 0;

        for (let i = 0; i < timelineEvents.length; i++) {
          const event = timelineEvents[i];
          const eventTop = event.getBoundingClientRect().top + window.scrollY;
          if (scrollY >= eventTop) {
            newHeight = eventTop - containerTop + event.offsetHeight / 2;
          }
        }

        setBeamHeight(newHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="timeline-container">
      <div className="timeline-line" style={{ height: `${beamHeight}px` }}></div>
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
