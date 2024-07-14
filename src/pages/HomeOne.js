import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import AboutHome from "../components/about-home/AboutHome";
import SoftwareDownload from "../components/software-downloads/SoftwareDownload";
import TimelineComponent from "../components/timeline/TimelineComponent";
import SectionTitle from "../components/ui/section-titles/SectionTitle";
import VideoPopup from "../components/video-popups/VideoPopup";
import HeroSlider from "../containers/hero-sliders/HeroSlider";
import TeamContent from "../containers/teams/TeamContent";
import LayoutOne from "../layouts/LayoutOne";

import CoinComponent from "../components/coin-component/CoinComponent";
import TokenomicsChart from "../components/tokenomic-chart/TokenomicsChart";
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
        <CoinComponent/>

        {/* website about - home */}
        <AboutHome />

        {/* roadmap */}

        <div>
          <SectionTitle
            title="RoadMap"
            text="We are working on a new way to invest in cryptocurrencies."
          />
          <TimelineComponent />
        </div>

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

        {/* counter up */}
        {/* <CounterUp backgroundImage="/images/bg/2.jpg" /> */}

        {/* listings */}

        {/* team */}
        <TeamContent />

        {/* App download */}
        <SoftwareDownload />

        {/* secure transaction */}

        {/* <SecureTransaction /> */}

        {/* Tokenomics chart */}

        <div>
        <SectionTitle
            title="Tokenomics Chart"
            text="We are working on a new way to invest in cryptocurrencies."
          />

<TokenomicsChart />
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
