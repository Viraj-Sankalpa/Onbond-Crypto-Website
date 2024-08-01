import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import AboutHome from "../components/about-home/AboutHome";
import SoftwareDownload from "../components/software-downloads/SoftwareDownload";
import TimelineComponent from "../components/timeline/TimelineComponent";
import SectionTitle from "../components/ui/section-titles/SectionTitle";
import VideoPopup from "../components/video-popups/VideoPopup";
import HeroSlider from "../containers/hero-sliders/HeroSlider";
import LayoutOne from "../layouts/LayoutOne";

import CoinComponent from "../components/coin-component/CoinComponent";
import Listings from "../components/listings/Listings";
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
        <Listings />

        {/* roadmap */}

        <div>
          <SectionTitle
            title="RoadMap"
            text="Our strategic plan for development and growth. This timeline outlines key milestones and features we aim to achieve, giving investors and users a clear view of our project's future."
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
            text="A visual representation of our token's economic model. This chart breaks down token distribution, allocation, and utility, providing transparency for our community and investors."
          />

          <TokenomicsChart />
          <div className="white-paper">
            <a
              href={`${process.env.PUBLIC_URL}/pdf/whitepaper.pdf`}
              className="secure__btn dg__btn btn--trans"
              download="whitepaper.pdf"
            >
              White paper
            </a>
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
