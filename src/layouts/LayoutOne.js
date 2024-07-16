import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Newsletter from "../components/newsletters/Newsletter";
import BrandLogo from "../containers/brand-logos/BrandLogo";
import Footer from "../containers/footers/Footer";
import Header from "../containers/headers/Header";

const LayoutOne = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      {/* brand logo */}
      <BrandLogo />
      {/* newsletter */}
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

LayoutOne.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.string
};

export default LayoutOne;
