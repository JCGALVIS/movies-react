import React from "react";
import PropTypes from "prop-types";

import "./card.scss";
import { urlImage } from "../../constants/constants";

export const Card = ({ image, title, date }) => {

  return (
    <div className="card">
      <div className="image">
        <img src={`${urlImage}${image}`} alt={title}></img>
      </div>
      <div className='info'>
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
