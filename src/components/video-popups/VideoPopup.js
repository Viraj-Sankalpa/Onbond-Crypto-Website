import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const VideoPopup = () => {
  const [modalStatus, isOpen] = useState(false);
  return (
    <div
      className="dg__video__area"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bg/8.jpg"})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="dg__video__inner">
              <h2>This Is a Parfect way to know about us</h2>
              <p>
                One Bond seeks to connect traditional finance and the crypto
                world through innovative blockchain-based services. The platform
                offers both fiat and crypto options via a user-friendly
                interface, prioritizing security and transparency. By leveraging
                its own blockchain technology, One Bond aims to make financial
                services more accessible globally. This approach positions One
                Bond as a potential disruptor in the financial sector.
              </p>
              <div className="play__video">
                <ModalVideo
                  channel="youtube"
                  isOpen={modalStatus}
                  videoId="2X9eJF1nLiY"
              
                  onClose={() => isOpen(false)}
                />
                <button onClick={() => isOpen(true)} className="play__btn">
                  <img
                    src={process.env.PUBLIC_URL + "/images/about/play.png"}
                    alt="play icon"
                  />
                  Play Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;
