import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import ServiceContentThree from "../components/service-contents/ServiceContentThree";
import ServiceContentTwo from "../components/service-contents/ServiceContentTwo";
import ServiceFeature from "../containers/service-contents/ServiceFeature";
import LayoutTwo from "../layouts/LayoutTwo";

const ServiceDetails = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>OneBond | Service Details</title>
        <meta
          name="description"
          content="Service details page of React JS Crypto Currency Template."
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="SERVICES DETAILS" />
        {/* service content */}
        <ServiceContentTwo />
        {/* service features */}
        <ServiceFeature />
        {/* service content */}
        <ServiceContentThree />
      </LayoutTwo>
    </Fragment>
  );
};

export default ServiceDetails;
