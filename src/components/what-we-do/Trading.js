import React from "react";
import SectionTitleFour from "../ui/section-titles/SectionTitleFour";

const Trading = () => {
  return (
    <div className="about__dgtaka about--2 section-padding--xl">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-12 col-sm-12 col-md-12">
            <div className="dg__secure__inner">
              {/* section title */}
              <SectionTitleFour title="Trading" />

              <p>
                We are specialized in importing and exporting commodities
                including major items like sugar, crude oil, other commodity
                items, etc., across the globe. We are the experts in trading
                FMCG and petroleum products worldwide.
              </p>
              <p>
                A group of our satisfied customers include the whole range of
                international and local customers all over the world.
              </p>
              <p>
                Many years of experience have allowed us to build a strong
                network of contacts all over the world. Thanks to this, we are
                able to buy and sell the commodities at an attractive price and
                deliver them to the farthest corners of the world. Borders and
                customs issues are no obstacles for us - we know the market and
                the rules of international trade very well.
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-12 col-sm-12 col-md-12 sm__mt--40 md__mt--40">
            <div className="dg__secure__thumb">
              <img
                src={process.env.PUBLIC_URL + "/images/about/6.png"}
                alt="secure images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trading;
