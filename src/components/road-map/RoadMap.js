import React from 'react';
import SectionTitle from '../ui/section-titles/SectionTitle';


const Roadmap = () => {
  return (
    <section id="roadmap" className="roadmap pt-135">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src="/images/bg/bg2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
      <SectionTitle
            title="RoadMap"
            text="Our strategic plan for development and growth. This timeline outlines key milestones and features we aim to achieve, giving investors and users a clear view of our project's future."
          />
      </div>
      <div className="roadmap-wrap">
        <div className="roadmap--top">
          <div className="roadmap--item roadmap--first_item">
            <h2 className="roadmap--head">Research</h2>
            <ul className="roadmap--info">
              <li>Objective Definition</li>
              <li>Data Collection</li>
              <li>Analysis</li>
              <li>Reporting</li>
            </ul>
            <div className="roadmap--year">
              <div className="roadmap--circle"><span></span></div>
              <span>Mid of Q4 2024</span>
            </div>
          </div>
          <div className="roadmap--item">
            <h2 className="roadmap--head">Token Test</h2>
            <ul className="roadmap--info">
              <li>Test Objectives</li>
              <li>Testing Environment Setup</li>
              <li>Test Cases Development</li>
              <li>Execution and Analysis</li>
            </ul>
            <div className="roadmap--year">
              <div className="roadmap--circle"><span></span></div>
              <span>End of Q4 2024</span>
            </div>
          </div>
        </div>
        <div className="roadmap--line"></div>
        <div className="roadmap--bottom">
          <div className="roadmap--item bottom-item">
            <div className="roadmap--year">
              <span>Mid of Q4 2024</span>
              <div className="roadmap--circle"><span></span></div>
            </div>
            <h2 className="roadmap--head">Concept</h2>
            <ul className="roadmap--info">
              <li>Value Proposition</li> 
              <li>Token Sale Details</li>
              <li>Team and Roadmap</li>
              <li>Transparency and Trust</li>
            </ul>
          </div>
          <div className="roadmap--item bottom-item">
            <div className="roadmap--year">
              <span>Mid of Q4 2024</span>
              <div className="roadmap--circle"><span></span></div>
            </div>
            <h2 className="roadmap--head">App Beta Test</h2>
            <ul className="roadmap--info">
              <li>Selection Criteria</li>
              <li>Testing Environment Setup</li>
              <li>Feedback Collection</li>
              <li>Iterative Improvement</li>
            </ul>
          </div>
          <div className="roadmap--item bottom-item">
            <div className="roadmap--year">
              <span>End of Q4 2024</span>
              <div className="roadmap--circle"><span></span></div>
            </div>
            <h2 className="roadmap--head">Alpha Test</h2>
            <ul className="roadmap--info">
              <li>Alpha Test Objectives</li>
              <li>Alpha Test Group Selection</li>
              <li>Test Environment Setup</li>
              <li>Feedback Collection and Iteration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
