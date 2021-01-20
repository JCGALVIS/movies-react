import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./card.scss";
import { urlImage } from "../../constants/constants";

export const Card = ({ id, image, title, date }) => {

  return (
    <div className="card">
      <div className="image">
        <img src={`${urlImage}${image}`} alt={title}></img>
      </div>
      <div className="info">
        <h3>{title}</h3>
        <p>{date}</p>
        <div className="link">
          <Link to={`./movies-detail/${id}`}>Más...</Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
