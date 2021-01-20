import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { urlImage, imageDeafault } from "../../constants/constants";
import "./card.scss";

export const Card = ({ id, image, title, date }) => {

  return (
    <div className="card">
      <div className="image">
        <img src={image ? `${urlImage}${image}` : `${imageDeafault}`} alt={title}></img>
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
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
};
