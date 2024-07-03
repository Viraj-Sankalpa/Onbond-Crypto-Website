import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import AboutContentTwo from "../components/about-contents/AboutContentTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import JoinUs from "../components/join-us/JoinUs";
import HowWeWork from "../components/what-we-do/HowWeWork";
import CompanyDetails from "../containers/company-details/CompanyDetails";
import WhatWeDoCards from "../containers/investments-projects-trading/WhatWeDoCards";
import LayoutTwo from "../layouts/LayoutTwo";

const WhatWeDo = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>What We Do</title>
        <meta
          name="description"
          content="What We Do page of OneBond."
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="what we do" />
        
       {/* investment / projects/ trading */}
       <WhatWeDoCards />
        {/* about content two */}
        <AboutContentTwo />
        {/* join us component */}
        <JoinUs />
        {/* Secretary, Auditor, Legal & Banker */}
        <CompanyDetails />
        {/* how we work  */}
        <HowWeWork />
        <br />
       
      </LayoutTwo>
    </Fragment>
  );
};

export default WhatWeDo;
