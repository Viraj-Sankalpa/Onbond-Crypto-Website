import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import GetCurrency from "../components/get-currencies/GetCurrency";
import SoftwareDownloadTwo from "../components/software-downloads/SoftwareDownloadTwo";
import WalletContent from "../components/wallet-contents/WalletContent";
import BlogGridTwo from "../containers/blog-grids/BlogGridTwo";
import WalletFeature from "../containers/wallet-features/WalletFeature";
import LayoutTwo from "../layouts/LayoutTwo";

const Wallet = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>OneBond | Wallet</title>
        <meta
          name="description"
          content="Wallet page of React JS Crypto Currency Template."
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="WALLET" />
        {/* wallet content */}
        <WalletContent />
        {/* wallet feature */}
        <WalletFeature />
        {/* get currency */}
        <GetCurrency />
        {/* software download */}
        <SoftwareDownloadTwo />
        {/* blog grid */}
        <BlogGridTwo />
      </LayoutTwo>
    </Fragment>
  );
};

export default Wallet;
