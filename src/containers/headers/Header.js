import PropTypes from "prop-types";
import React from "react";
import Logo from "../../components/header/Logo";

const Header = ({ theme }) => {
  return (
    <header className="dg__header header--absolute space-right-left">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-2 col-xl-2 col-6">
            {/* logo */}
            <Logo
              image={
                theme === "white" ? "/images/logo/logo-final.gif" : "/images/logo/logo-final.gif"
              }
            />
          </div>
          <div className="col-lg-7 col-xl-8 d-none d-lg-block">
            {/* navigation */}
            {/* <Navigation /> */}
          </div>
          <div className="col-lg-3 col-xl-2 col-6">
            {/* header buttons */}
            {/* <HeaderBtn /> */}
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {/* <MobileMenu /> */}
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.string,
};

export default Header;
