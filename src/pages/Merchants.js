import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import Merchant from "../containers/merchants/Merchant";
import LayoutTwo from "../layouts/LayoutTwo";

const Merchants = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>OneBond | Merchants</title>
        <meta
          name="description"
          content="Merchants page of OneBond WebSite."
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="MERCHANTS" />
        {/* merchant content */}
        <Merchant />
      </LayoutTwo>
    </Fragment>
  );
};

export default Merchants;
