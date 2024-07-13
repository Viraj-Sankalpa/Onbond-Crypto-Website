import React from "react";
import { Link } from "react-router-dom";

const AboutHome = () => {
  return (
    <div className="dg__secure__transaction">
      <div className="container">
        <div className="row flex-column-reverse flex-lg-row align-items-center">
          <div className="col-lg-7">
            <div className="dg__secure__inner">
              <h2>
              One Bond Coin: Pioneering Accessible, Secure, and Transparent Financial Services
              </h2>
              <p>
                The OBC (One Bond Coin) aims to bridge the gap between
                traditional finance and the crypto world by offering a
                comprehensive suite of financial services that cater to the
                needs of the crypto users with access to a range of financial
                services that are secure, transparent, and user-friendly.
              </p>
              <p>
                One of the key ways in which the OBC (One Bond Coin) solve the
                problem of the gap between traditional finance and the crypto
                world is by offering users access to both fiat and crypto-based
                financial services.
              </p>
              <Link
                className="secure__btn dg__btn btn--trans"
                to={process.env.PUBLIC_URL + "/"}
              >
                read more
              </Link>
            </div>
          </div>
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="dg__secure__thumb">
              <img
                // src={process.env.PUBLIC_URL + "/images/about/2.png"}
                src={process.env.PUBLIC_URL + "/images/about/about-comp.gif"}
                alt="secure images"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
