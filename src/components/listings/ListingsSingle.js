import PropTypes from "prop-types";
import React from "react";

const ListingSingle = ({ data, sliderClass }) => {
  return (
    <li
      className={`text-center ${sliderClass && sliderClass ? sliderClass : ""}`}
    >
      <a
        href={process.env.PUBLIC_URL + data.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={process.env.PUBLIC_URL + data.image} alt="brand images" />
      </a>
    </li>
  );
};

ListingSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string
}

export default ListingSingle;
