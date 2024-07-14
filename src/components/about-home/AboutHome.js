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
                What is One Bond Coin
              </h2>
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
