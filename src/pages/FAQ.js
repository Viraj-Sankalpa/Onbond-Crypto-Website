import React, { useState } from 'react';
import '../assets/scss/blocks/FAQ.scss';
import SectionTitle from '../components/ui/section-titles/SectionTitle';

const faqData = [
  {
    question: "What is One Bond (OBC)?",
    answer: "One Bond is a digital currency and decentralized networkenabling global transactions and diverse applications.",
  },
  {
    question: "How can I access One Bond?",
    answer: "You can access One Bond from anywhere with an internet connection, without relying on a central authority.",
  },
  {
    question: "What financial services does One Bond offer? ",
    answer: "One Bond offers lending, borrowing, and savings products accessible with just an internet connection.",
  },
  {
    question: "What is the decentralized web in One Bond?",
    answer: "One Bond allows anyone to create and manage applications and assets autonomously.",
  },
  {
    question: "How does One Bond handle transactions?",
    answer: "One Bond enables direct transactions between peers, eliminating intermediaries.",
  },
  {
    question: "Is One Bond subject to censorship?",
    answer: "No, One Bond operates independently of any government or corporation, preventing censorship.",
  },
  {
    question: "What assurances does One Bond provide businesses? ",
    answer: "One Bond ensures secure transactions only upon agreed terms, offering stability for developers.",
  },
  {
    question: "Are One Bond products interoperable?",
    answer: "Yes, all applications on One Bond operate on a unified blockchain, fostering collaboration and innovation.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <SectionTitle
        title="FAQ"
        text="Quick answers to common queries about our project. This section helps newcomers and existing users understand our coin's features, benefits, and how to get involved."
      />
    <div className="faq-container">
      
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {item.question}
            <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQ;
