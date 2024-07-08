import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import AboutContentThree from "../components/about-contents/AboutContentThree";
import AboutContentTwo from "../components/about-contents/AboutContentTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import VideoPopup from "../components/video-popups/VideoPopup";
import CurrencyTicker from "../containers/currency-tickers/CurrencyTicker";
import MarketTable from "../containers/market-tables/MarketTable";
import LayoutTwo from "../layouts/LayoutTwo";

const AboutBitcoin = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>OneBond | About Bitcoin</title>
        <meta
          name="description"
          content="About bitcoin page of OneBond WebSite."
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="About Bitcoin" />
        {/* about content */}
        <AboutContentThree />
        {/* currency ticker */}
        <CurrencyTicker theme="dark" />
        {/* market table */}
        <MarketTable />
        {/* video popup */}
        <VideoPopup />
        {/* about content two */}
        <AboutContentTwo />
      </LayoutTwo>
    </Fragment>
  );
};

export default AboutBitcoin;
