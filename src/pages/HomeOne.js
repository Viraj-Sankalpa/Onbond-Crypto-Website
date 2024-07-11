import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import AboutHome from "../components/about-home/AboutHome";
import MembershipPlan from "../components/membership-plans/MembershipPlan";
import SecureTransaction from "../components/secure-transactions/SecureTransaction";
import TimelineComponent from "../components/timeline/TimelineComponent";
import TokenomicsChart from "../components/tokenomic-chart/TokenomicsChart";
import SectionTitle from "../components/ui/section-titles/SectionTitle";
import VideoPopup from "../components/video-popups/VideoPopup";
import CompanyDetails from "../containers/company-details/CompanyDetails";
import CurrencyTicker from "../containers/currency-tickers/CurrencyTicker";
import HeroSlider from "../containers/hero-sliders/HeroSlider";
import TeamContent from "../containers/teams/TeamContent";
import LayoutOne from "../layouts/LayoutOne";
import ContactForm from "./ContactForm";
import FAQ from "./FAQ";

const HomeOne = () => {
  const roadmapItems = [
    {
      title: "Launch Phase",
      description: `
        - To develop a P2P engine and implement algorithms that deal with the establishment of the infrastructure of the project.
        - Optimize the workflows, research, and design the UI concerning the user research and practice exploration for Blockchain Explorer.
        - To develop the UI design for the X1 mining Application, define the layouts and user interface.
        - Conduct the testing of applications, audit BDAG Smart contracts, and execute marketing strategies, including 10% referral bonuses for investors.
      `,
      number: 1,
    },
    {
      title: "Development Phase",
      description: `
        - Integration of proof of work consensus mechanism and protocols for node communication.
        - Implement data structuring algorithms, UI-based framework deployment, and modular architecture design.
      `,
      number: 2,
    },
    {
      title: "Launch Phase",
      description: `
        - To develop a P2P engine and implement algorithms that deal with the establishment of the infrastructure of the project.
        - Optimize the workflows, research, and design the UI concerning the user research and practice exploration for Blockchain Explorer.
        - To develop the UI design for the X1 mining Application, define the layouts and user interface.
        - Conduct the testing of applications, audit BDAG Smart contracts, and execute marketing strategies, including 10% referral bonuses for investors.
      `,
      number: 1,
    },
    {
      title: "Development Phase",
      description: `
        - Integration of proof of work consensus mechanism and protocols for node communication.
        - Implement data structuring algorithms, UI-based framework deployment, and modular architecture design.
      `,
      number: 2,
    },
    {
      title: "Launch Phase",
      description: `
        - To develop a P2P engine and implement algorithms that deal with the establishment of the infrastructure of the project.
        - Optimize the workflows, research, and design the UI concerning the user research and practice exploration for Blockchain Explorer.
        - To develop the UI design for the X1 mining Application, define the layouts and user interface.
        - Conduct the testing of applications, audit BDAG Smart contracts, and execute marketing strategies, including 10% referral bonuses for investors.
      `,
      number: 1,
    },
    {
      title: "Development Phase",
      description: `
        - Integration of proof of work consensus mechanism and protocols for node communication.
        - Implement data structuring algorithms, UI-based framework deployment, and modular architecture design.
      `,
      number: 2,
    },
    // Add more phases as needed
  ];
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
        {/* currency ticker */}
        <CurrencyTicker />
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
        <div>
        <SectionTitle
            title="Membership Plan"
            text="We are working on a new way to invest in cryptocurrencies."
          />
        
        <MembershipPlan />
        </div>

        {/* video popup */}
        <VideoPopup />

        {/* counter up */}
        {/* <CounterUp backgroundImage="/images/bg/2.jpg" /> */}

        {/* listings */}

        {/* team */}
        <TeamContent />

        {/* auditor legal secerety */}
        <CompanyDetails />
        
        <SecureTransaction />

        {/* Toconomic chart */}
        <div>
        <SectionTitle
            title="Tokenomic Chart"
            text="We are working on a new way to invest in cryptocurrencies."
          />

        <TokenomicsChart />

        </div>
        
        

        <br />

   

        {/* software download */}
        {/* <SoftwareDownload /> */}

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
