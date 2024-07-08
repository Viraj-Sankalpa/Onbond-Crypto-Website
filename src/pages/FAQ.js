import React, { useState } from 'react';
import '../assets/scss/blocks/FAQ.scss';
import SectionTitle from '../components/ui/section-titles/SectionTitle';

const faqData = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "How does React work?",
    answer: "React creates a virtual DOM and updates it in response to changes in state or props.",
  },
  {
    question: "What are components?",
    answer: "Components are the building blocks of a React application.",
  },
  {
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript that looks similar to XML or HTML.",
  },
  {
    question: "How do you handle events in React?",
    answer: "Events are handled using event handlers, similar to HTML but with camelCase syntax.",
  },
  {
    question: "What are props?",
    answer: "Props are inputs to components that allow data to be passed from parent to child components.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <SectionTitle
        title="FAQ"
        text="Frequently Asked Questions"
      />
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
  );
};

export default FAQ;
