import React from "react";
import PropTypes from "prop-types";

import "./card.scss";

export const Card = ({ image, title, year }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={image}></img>
      </div>
      <div className='info'>
        <h3>{title}</h3>
        <p>{year}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};
