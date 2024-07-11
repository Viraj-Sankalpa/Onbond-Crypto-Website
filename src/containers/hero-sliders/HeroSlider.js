import React from "react";
// import videoBg from "../../assets/video/onebond-video-1.mp4";
import HeroSliderSingle from "../../components/hero-sliders/HeroSliderSingle";
import sliderData from "../../data/hero-sliders/hero-slider.json";

const HeroSliderOne = () => {
  return (
    <div className="main">
      {/* <video src={videoBg} autoPlay loop muted /> */}
    <div className="dg__slider__area slider--one">
    
      {sliderData &&
        sliderData.map((single, key) => {
          return <HeroSliderSingle data={single} key={key} />;
        })}
    </div>
    </div>
  );
};

export default HeroSliderOne;
