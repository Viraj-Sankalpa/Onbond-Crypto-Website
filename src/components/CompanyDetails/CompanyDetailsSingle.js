import PropTypes from "prop-types";
import React from "react";

const CompanyDetailsSingle = ({ data }) => {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
      <div className="feature bg--1">
        <div className="icon">
          <img src={process.env.PUBLIC_URL + data.image} alt="service icon" />
        </div>
        <div className="content">
          <h2>{data.title}</h2>
          <h6>{data.content1}</h6>
          <p>{data.content2}</p>
          <p>{data.content3}</p>
          <p>{data.content4}</p>
        </div>
      </div>
    </div>
  );
};

CompanyDetailsSingle.propTypes = {
  data: PropTypes.object
};

export default CompanyDetailsSingle;
