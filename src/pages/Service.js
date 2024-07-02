import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import ServiceContent from "../components/service-contents/ServiceContent";
import ServiceList from "../containers/service-contents/ServiceList";
import LayoutTwo from "../layouts/LayoutTwo";

const Service = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>OneBond | Service</title>
        <meta
          name="description"
          content="Service page of React JS Crypto Currency Template."
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="SERVICES WE PROVIDE" />
        {/* service content */}
        <ServiceContent />
        {/* service list */}
        <ServiceList />
      </LayoutTwo>
    </Fragment>
  );
};

export default Service;
