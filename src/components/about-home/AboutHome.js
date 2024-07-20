import React, { useState } from "react";
import Modal from "react-modal";

// Set the root element for the modal
Modal.setAppElement('#root');

const AboutHome = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="dg__secure__transaction">
      <div className="container">
        <div className="row flex-column-reverse flex-lg-row align-items-center">
          <div className="col-lg-7">
            <div className="dg__secure__inner">
              <h2>What is One Bond Coin</h2>
              <p>
                One Bond is a digital currency that operates as a globally
                distributed network of computers adhering to the One Bond
                protocol. Serving as a robust infrastructure, One Bond empowers
                communities, applications, organizations, and digital assets,
                facilitating their creation and utilization.
              </p>
              <p>
                Accessible from anywhere and at any time, you can establish a
                One Bond account to delve into a realm of applications or
                develop your own. A key breakthrough lies in the ability to
                engage in these activities without reliance on a central
                authority capable of altering rules or limiting access.
              </p>
              <button
                className="secure__btn dg__btn btn--trans"
                onClick={openModal}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="dg__secure__thumb">
              <img
                src={process.env.PUBLIC_URL + "/images/about/about-comp.gif"}
                alt="secure images"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Read More"
        className="custom-modal"
        overlayClassName="custom-modal-overlay"
      >
        <h2>More About One Bond Coin</h2>
        <p>
          One Bond Coin represents a significant advancement in the digital currency space. By leveraging a decentralized network, it ensures secure transactions and enhances accessibility for users worldwide. The infrastructure supports diverse applications, enabling innovative solutions across various sectors.
        </p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default AboutHome;
