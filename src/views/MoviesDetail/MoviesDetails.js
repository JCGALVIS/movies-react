import React from "react";
import { useParams } from "react-router-dom";

import "./moviesDetails.scss";

export const MoviesDetails = () => {
  const { movieId } = useParams();

  console.log(movieId);

  return (
    <div className="movies-detail">
      <div className="image">
        <img
          src="https://www.themoviedb.org/t/p/w440_and_h660_face/vVPrWngVJ2cfYAncBedQty69Dlf.jpg"
          alt="Redcon-1"
        />
      </div>
      <div className="info">
        <h1>Peli 1</h1>
        <p>
          <span>Genero: </span>Horro, Comedia
        </p>
        <p>
          <span>Año de publicación: </span> 2019-02-01
        </p>
      </div>
    </div>
  );
};
