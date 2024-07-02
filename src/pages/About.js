import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import AboutContent from "../components/about-contents/AboutContent";
import AboutContentTwo from "../components/about-contents/AboutContentTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import JoinUs from "../components/join-us/JoinUs";
import VideoPopup from "../components/video-popups/VideoPopup";
import CompanyDetails from "../containers/company-details/CompanyDetails";
import LayoutTwo from "../layouts/LayoutTwo";

const About = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Who We Are</title>
        <meta
          name="description"
          content="About page of OneBond."
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="who we are" />
        {/* about content */}
        <AboutContent />
        {/* video popup */}
        <VideoPopup />
        {/* about content two */}
        <AboutContentTwo />
        {/* join us component */}
        <JoinUs />
        {/* Secretary, Auditor, Legal & Banker */}
        <CompanyDetails />
        <br />
       
      </LayoutTwo>
    </Fragment>
  );
};

export default About;
