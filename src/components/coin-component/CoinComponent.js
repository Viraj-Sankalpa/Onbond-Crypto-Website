import React from "react";
import "../../assets/scss/blocks/CoinComponent.scss";

const CoinComponent = () => {


  return (
    <div className="coin-container">
      

      <div className="buttons">
      <a href="http://onebond.org/public" className="secure__btn dg__btn btn--trans">
          Log In
        </a>
        <a href="http://onebond.org/public" className="secure__btn dg__btn btn--trans">
          Buy Token
        </a>
        <a href="http://onebond.org/public" className="secure__btn dg__btn btn--trans">
          Member login
        </a>
      </div>

     
    </div>
  );
};

export default CoinComponent;
