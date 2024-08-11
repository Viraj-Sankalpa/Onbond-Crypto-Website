import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import AboutHome from "../components/about-home/AboutHome";
import SoftwareDownload from "../components/software-downloads/SoftwareDownload";
import SectionTitle from "../components/ui/section-titles/SectionTitle";
import LayoutOne from "../layouts/LayoutOne";

import CoinComponent from "../components/coin-component/CoinComponent";
import HeroSection from "../components/hero-section/HeroSection";
import ListingLogoSwiper from "../components/listings/ListingLogoSwiper";
import PhoneAnimation from "../components/phone-animation/PhoneAnimation";
import RoadMap from "../components/road-map/RoadMap";
import Team from "../components/teams/Team";
import TokenomicsChart from "../components/tokenomic-chart/TokenomicsChart";
import Globe from "../components/vanta/Globe";
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
        <HeroSection />
        {/* <HeroSlider /> */}

        {/* coin and two buttons */}
        <CoinComponent />
        <Globe />

        {/* website about - home */}
        <AboutHome />

        {/* listings */}
        <div>
          <SectionTitle
            title="OUR LISTINGS"
            text="We are working on a new way to invest in cryptocurrencies."
          />

          <ListingLogoSwiper />
        </div>

        {/* roadmap */}
         <RoadMap />
         
        

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

        {/* team */}
     
          <Team />
      

        {/* App download */}
        <SoftwareDownload />

        {/* Tokenomics chart */}

        <div>
          <SectionTitle
            title="Tokenomics Chart"
            text="A visual Representation of our token's economic model. This chart breaks down token distribution, allocation, and utility, providing transparency for our community and investors."
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
