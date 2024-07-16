import React from "react";
import { Link } from "react-router-dom";
import "../../assets/scss/blocks/CoinComponent.scss";

const CoinComponent = () => {


  return (
    <div className="coin-container">
      

      <div className="buttons">
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
          member login
        </Link>
      </div>

     
    </div>
  );
};

export default CoinComponent;
