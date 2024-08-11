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
    <div className="about-home">
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
                src={process.env.PUBLIC_URL + "/images/about/global.png"}
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
        <div className="modal-content">
          <h2>What One Bond can do?</h2>
          <h4>Universal access to digital banking</h4>
          <p>
            While financial services remain out of reach for some, accessing One Bond and its lending, borrowing, and savings products only requires an internet connection.
          </p>
          <h4>Decentralized web</h4>
          <p>
            The One Bond network welcomes everyone to participate and create applications, giving you the power to manage your assets and identity autonomously, free from the influence of large corporations.
          </p>
          <h4>Network of interconnected peers</h4>
          <p>
            One Bond enables you to coordinate, agree upon, or transfer digital assets directly with others, eliminating the need for intermediaries.
          </p>
          <h4>Impervious to censorship</h4>
          <p>
            One Bond operates independently of any government or corporation. Its decentralized structure ensures that no entity can easily prevent you from receiving payments or utilizing services on the platform.
          </p>
          <h4>Business assurances</h4>
          <p>
            Customers are provided with a secure assurance that funds will only transfer upon fulfillment of agreed terms. Similarly, developers can expect stability with rules that remain unchanged.
          </p>
          <h4>Interoperable products</h4>
          <p>
            All applications operate on a unified blockchain with a shared global state, enabling them to collaborate and innovate together. This fosters enhanced products and user experiences, with the assurance that essential tools relied upon by apps cannot be tampered with or removed.
          </p>
          <button onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </div>
    </div>
  );
};

export default AboutHome;
