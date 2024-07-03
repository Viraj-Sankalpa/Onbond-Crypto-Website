import React from "react";
import SectionTitleFour from "../ui/section-titles/SectionTitleFour";

const Projects = () => {
  return (
    <div className="dg__service__area bg--white padding--hor">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 col-sm-12 col-12">
            <div className="service__chart">
              <div className="thumb">
                <img
                  src={process.env.PUBLIC_URL + "/images/about/service.png"}
                  alt="chart"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-xl-6 offset-xl-1 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="service__inner">
              {/* section title */}
              <SectionTitleFour title="Projects" />

              <p>
                Our main objective is to identify and/or develop infrastructure
                and other projects projects in various industry sectors. We
                create opportunities for the stakeholders to Develop, Operate
                and Invest in diverse Sectors, support policy, regulatory and
                capacity development, based on sustainable risk-sharing and
                economic and commercial viability.
              </p>
              <p>
                We aim to leverage the strengths of stakeholders across the
                value chain of Project Development and implementation-related
                activities.
              </p>
              <p>
                We bring manage the project delivery team including
                implementation partners, technology partners, and present an
                end-to-end project delivery solution. Our team brings
                international best practices and experience, combined with local
                resources and knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
