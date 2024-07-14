import React from "react";
import { Link } from "react-router-dom";
import "../../assets/scss/blocks/CoinComponent.scss";

const CoinComponent = () => {


  return (
    <div className="coin-container">
      <img
        src={process.env.PUBLIC_URL + "/images/logo/1.gif"}
        alt="secure images"
      />

      <div className="button-container">
        <Link
          className="secure__btn dg__btn btn--trans"
          to={process.env.PUBLIC_URL + "/"}
        >
          Log In
        </Link>
        <Link
          className="secure__btn dg__btn btn--trans"
          to={process.env.PUBLIC_URL + "/"}
        >
          Buy token
        </Link>
        <Link
          className="secure__btn dg__btn btn--trans"
          to={process.env.PUBLIC_URL + "/"}
        >
          membership plans
        </Link>
      </div>

      <img
        src={process.env.PUBLIC_URL + "/images/logo/1.gif"}
        alt="secure images"
      />
    </div>
  );
};

export default CoinComponent;
