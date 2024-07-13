import PropTypes from "prop-types";
import React from "react";
import videoBg from "../../assets/video/onebond-video-1.mp4";

const HeroSliderOneSingle = ({ data }) => {
  return (
    <div className="slide d-flex align__center poss--relative">
      <video autoPlay muted loop className="video-background">
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7 col-sm-12 col-12 d-flex align-items-center">
            <div className="slide__inner">
              <h1>{data.title}</h1>
              {/* <Link
                className="slide__btn dg__btn btn--white"
                to={process.env.PUBLIC_URL + data.url}
              >
                Buy Tokens
              </Link> */}
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 col-12">
            <div className="slider__fornt text-right">
              {/* <img
                src={process.env.PUBLIC_URL + data.image}
                alt="slider images"
                className="img-fluid"
              /> */}
            </div>
          </div>
        </div>
      </div>
      {/* particle */}
      {/* <Particle /> */}
    </div>
  );
};

HeroSliderOneSingle.propTypes = {
  data: PropTypes.object
};

export default HeroSliderOneSingle;
