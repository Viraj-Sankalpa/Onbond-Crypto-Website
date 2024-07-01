import PropTypes from "prop-types";
import React from "react";
import CounterUpSingle from "../../components/counter-ups/CounterUpSingle.js";
import counterUpData from "../../data/counter-ups/counterup-one.json";

const CounterUp = ({ backgroundImage }) => {
  return (
    <div
      className="dg__counter__up"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + backgroundImage})`
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="counterup__wrapper">
              {counterUpData &&
                counterUpData.map((single, key) => {
                  return <CounterUpSingle data={single} key={key} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CounterUp.propTypes = {
  backgroundImage: PropTypes.string
};

export default CounterUp;
