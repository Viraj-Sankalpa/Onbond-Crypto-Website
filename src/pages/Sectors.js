import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import Investments from "../components/what-we-do/Investments";
import Projects from "../components/what-we-do/Projects";
import Trading from "../components/what-we-do/Trading";
import LayoutTwo from "../layouts/LayoutTwo";

const Sectors = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>What We Do</title>
        <meta
          name="description"
          content="About page of OneBond."
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="Investment | projects | Trading" />
        {/* Investmments */}
        <Investments />
       
        {/* projects */}
        <Projects />
        
        {/* trading */}
        <Trading />
       
      </LayoutTwo>
    </Fragment>
  );
};

export default Sectors;
