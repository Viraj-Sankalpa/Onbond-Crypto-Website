import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import AboutHome from "../components/about-home/AboutHome";
import SoftwareDownload from "../components/software-downloads/SoftwareDownload";
import TimelineComponent from "../components/timeline/TimelineComponent";
import SectionTitle from "../components/ui/section-titles/SectionTitle";
import VideoPopup from "../components/video-popups/VideoPopup";
import HeroSlider from "../containers/hero-sliders/HeroSlider";
import LayoutOne from "../layouts/LayoutOne";

import CoinComponent from "../components/coin-component/CoinComponent";
import CryptoListings from "../components/listings/CryptoListings";
import PhoneAnimation from "../components/phone-animation/PhoneAnimation";
import TokenomicsChart from "../components/tokenomic-chart/TokenomicsChart";
import TeamMembers from "../containers/teams/TeamMembers";
import ContactForm from "./ContactForm";
import FAQ from "./FAQ";

const HomeOne = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>OneBond | Home</title>
        <meta
          name="description"
          content="Homepage of OneBond Crypto Currency Website."
        />
      </MetaTags>
      <LayoutOne>
        {/* hero slider */}
        <HeroSlider />

        {/* coin and two buttons */}
        <CoinComponent />

        {/* website about - home */}
        <AboutHome />

        {/* listings */}
        <CryptoListings />

        {/* roadmap */}

        <div>
          <SectionTitle
            title="RoadMap"
            text="We are working on a new way to invest in cryptocurrencies."
          />
          <TimelineComponent />
        </div>

        <br />

        <PhoneAnimation />

        <br />
        <br />
        <br />
        <br />

        {/* membership plan */}
        {/* <div>
          <SectionTitle
            title="Membership Plan"
            text="We are working on a new way to invest in cryptocurrencies."
          />

          <MembershipPlan />
        </div> */}

        {/* video popup */}
        <VideoPopup />

        {/* team */}
        <TeamMembers />

        {/* App download */}
        <SoftwareDownload />

        {/* Tokenomics chart */}

        <div>
          <SectionTitle
            title="Tokenomics Chart"
            text="We are working on a new way to invest in cryptocurrencies."
          />

          <TokenomicsChart />
          <div className="white-paper">
            <Link
              className="secure__btn dg__btn btn--trans"
              to={process.env.PUBLIC_URL + "/"}
            >
              White paper
            </Link>
            
          </div>
        </div>

        <br />

        {/* faq */}
        <FAQ />

        {/* contact form */}
        <ContactForm />

        {/* blog grid */}
        {/* <BlogGrid /> */}
      </LayoutOne>
    </Fragment>
  );
};

export default HomeOne;
