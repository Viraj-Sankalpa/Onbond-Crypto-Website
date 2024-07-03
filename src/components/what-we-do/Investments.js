import React from "react";
import SectionTitleFour from "../ui/section-titles/SectionTitleFour";

const Investments = () => {
  return (
    <div className="about__dgtaka about--2 section-padding--xl">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-12 col-sm-12 col-md-12">
            <div className="dg__secure__inner">
              {/* section title */}
              <SectionTitleFour title="Investments" />

              <p>
                We continuously evolve our business model to focus on our key
                strengths by collaborating with our shareholder, developing our
                talent and entering world-class partnerships.
              </p>
              <p>
                We capitalize on our team’s long-term global experience that
                generate sustainable opportunities for growth and take an active
                approach to investing while continuously exploring new and
                innovative opportunities to expand our investable universe. We
                invest in the world’s major markets and emerging markets that
                have the potential for sustained growth to provide good returns
                and value to our clients and stakeholders.
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

export default Investments;
