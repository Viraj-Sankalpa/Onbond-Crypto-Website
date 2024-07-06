import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import HeaderBtn from "../../components/header/HeaderBtn";
import Logo from "../../components/header/Logo";
import MobileMenu from "../../components/header/MobileMenu";

const Header = ({ theme }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <header
      className={`dg__header header--absolute space-right-left ${
        scroll > headerTop ? "stick" : ""
      }`}
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-2 col-xl-2 col-6">
            {/* logo */}
            <Logo
              image={
                theme === "white" ? "/images/logo/1.gif" : "/images/logo/1.gif"
              }
            />
          </div>
          <div className="col-lg-7 col-xl-8 d-none d-lg-block">
            {/* navigation */}
            {/* <Navigation /> */}
          </div>
          <div className="col-lg-3 col-xl-2 col-6">
            {/* header buttons */}
            <HeaderBtn />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <MobileMenu />
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.string
};

export default Header;
