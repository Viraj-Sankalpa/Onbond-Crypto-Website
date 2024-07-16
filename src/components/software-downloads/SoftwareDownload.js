import React from "react";

const SoftwareDownload = () => {
  return (
    <div className="dg__software__area section-padding--tb ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="dg__software__inner">
              <h2>Download Mobile app, Compatible For All Devices</h2>
              <p>
                The One Bond Coin mobile app offers seamless cryptocurrency
                management across all devices. Whether you're using a
                smartphone, tablet, or any other mobile platform, this versatile
                application ensures you stay connected to your digital assets on
                the go. With its user-friendly interface and cross-device
                compatibility, the app allows you to track, trade, and manage
                your One Bond Coins effortlessly. Download now to experience
                secure and convenient crypto handling, tailored to fit your
                lifestyle and preferred device.
              </p>
              <h5>Download apk file here</h5>
              <ul className="avilable__device">
                {/* <li>
                  <a
                    href={process.env.PUBLIC_URL + "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/4.png"}
                      alt="images"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={process.env.PUBLIC_URL + "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/5.png"}
                      alt="images"
                    />
                  </a>
                </li> */}
                <li>
                  <a
                    href={process.env.PUBLIC_URL + "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/6.png"}
                      alt="images"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={process.env.PUBLIC_URL + "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/7.png"}
                      alt="images"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="phone__images">
              <img
                src={process.env.PUBLIC_URL + "/images/about/app.png"}
                alt="phone images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDownload;
