import React from "react";
import "../../assets/scss/blocks/HowWeWork.scss";
import SectionTitle from "../ui/section-titles/SectionTitle";

const HowWeWork = () => {
  const sections = [
    {
      title: "Strategic Analysis",
      description:
        "Before diving into any venture, we conduct comprehensive strategic analyses. This involves market research, feasibility studies, and risk assessments to ensure informed decision-making.",
    },
    {
      title: "Tailored Solutions",
      description:
        "We understand that each project and investment opportunity is unique. Therefore, we tailor our strategies to fit the specific needs, goals, and risk tolerances of our stakeholders.",
    },
    {
      title: "Holistic Approach",
      description:
        "Our process isn't just about the numbers; we take a holistic view. This means considering environmental, social, and governance factors alongside financial metrics to ensure sustainable and responsible investments.",
    },
    {
      title: "Dynamic Adaptability",
      description:
        "In the ever-evolving landscape of investments, adaptability is key. We stay agile and responsive, continuously monitoring market trends and adjusting our strategies accordingly to maximize returns and minimize risks.",
    },
    {
      title: "Transparency and Communication",
      description:
        "We believe in fostering transparent and open communication with our clients. Throughout the investment journey, we provide regular updates, insights, and reports to keep our clients well-informed and empowered to make confident decisions.",
    },
    {
      title: "Long-term Vision",
      description:
        "While we focus on short-term gains, we never lose sight of the long-term vision. Our aim is to build sustainable wealth for our stakeholders, fostering enduring partnerships based on trust and mutual success.",
    },
    {
      title: "Continuous Improvement",
      description:
        "The investment landscape is always evolving, and so are we. We embrace a culture of continuous learning and improvement, staying abreast of industry trends, technological advancements, and best practices to refine our approach and deliver superior outcomes.",
    },
  ];

  return (
    <div className="how-we-work">
      <SectionTitle
        title="How to Work"
        text="We redefine project and commodity investment through a meticulous and
        strategic approach. Our methodology is anchored in precision, foresight,
        and a commitment to delivering tangible results for our clients. Here's
        an insight into how we operate:"
      />
      <div className="cards-container">
        {sections.map((section, index) => (
          <div className="card" key={index}>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </div>
        ))}
      </div>

      <p>
        We don't just invest in projects and commodities; we invest in
        relationships, trust, and prosperity. Join us on a journey where every
        decision is guided by expertise, integrity, and a relentless pursuit of
        excellence.
      </p>
    </div>
  );
};

export default HowWeWork;
