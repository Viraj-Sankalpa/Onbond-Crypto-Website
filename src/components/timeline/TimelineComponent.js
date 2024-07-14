import React, { useEffect, useState } from "react";
import "../../assets/scss/blocks/TimelineComponent.scss";

const events = [
  {
    id: 1,
    date: "2nd Quarter of 2025",
    content:
      "One Bond Wallet | In future OBC Wallet will be available on PC, on MAC and as a mobile application that you may download from the App store or from Google Apps. OBC Wallet will give you the freedom to manage your funds, to transfer funds, to buy or sell OBC (One Bond Coin), to transfer funds to your contacts or to even pay your bills. This upcoming wallet is fully decentralized and secured. This will be audited and certified by third party auditors.",
  },
  {
    id: 2,
    date: "4th Quarter of 2025",
    content:
      "One Bond Block Chain. | OBBC (One Bond Block Chain) is a decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third-party interference.",
  },
  {
    id: 3,
    date: "1st Quarter of 2026",
    content:
      "DEZTA – Social Media App. | DEZTA application will be redefining social media through decentralization. Our platform represents a revolutionary approach to connecting people globally while prioritizing privacy, security, and user empowerment.",
  },
  {
    id: 4,
    date: "4th Quarter of 2026",
    content:
      "One Bond Exchange (Exallone) | At OBC’s Exallone, we empower you to delve into the exciting world of crypto currencies with ease and confidence. Whether the user is a seasoned trader or just getting started, our platform offers a secure and intuitive way to buy, sell, and trade digital assets.",
  },
  {
    id: 5,
    date: "2nd Quarter of 2027",
    content:
      "One Bond Bank. | Here is our most important product; the one that will change the way people perceive and use the current banking system. We will be launching OBC Bank in future which will offer you to manage all your favourite crypto currencies in a single place. Obviously, your OBC Card will also be connected to your bank account to manage payments and to manage received purchase bonuses. The most important OBC Bank innovation will be the crypto currency securities. ",
  },
  {
    id: 6,
    date: "4th Quarter of 2027",
    content:
      "One Bond Card. | Revolutionary and unprecedented, in future we will be launching OBC Card which will be accepted everywhere in the world, regardless of your country’s currency. Your card will adapt to the geographical area in which you are located. OBC Card will be linked to your OBC Wallet and to your OBC (One Bond Coin). When you make a purchase with the card, our system will target the best available exchange rate and will debit your account of the exact OBC (One Bond Coin) amount corresponding to your purchase in order to confirm the transaction. ",
  },
  // Add more events as needed
];

const TimelineComponent = () => {
  const [beamHeight, setBeamHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const timelineContainer = document.querySelector(".timeline-container");
      const timelineEvents = document.querySelectorAll(".timeline-event");
      if (timelineContainer && timelineEvents.length > 0) {
        const containerTop =
          timelineContainer.getBoundingClientRect().top + window.scrollY;
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="timeline-container">
      <div
        className="timeline-line"
        style={{ height: `${beamHeight}px` }}
      ></div>
      {events.map((event, index) => (
        <div
          key={event.id}
          className={`timeline-event ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="timeline-date">{event.date}</div>
          <div className="timeline-content">{event.content}</div>
        </div>
      ))}
    </div>
  );
};

export default TimelineComponent;
