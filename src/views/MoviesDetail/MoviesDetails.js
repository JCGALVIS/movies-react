import React from "react";
import { useParams } from "react-router-dom";

import { useFecthMovieId } from "../../hooks/useFecthMovieId";
import { urlImage } from "../../constants/constants";
import { CardAuthor } from "../../components/CardAuthor/CardAuthor";

import "./moviesDetails.scss";

export const MoviesDetails = ({ history }) => {
  const { movieId } = useParams();
  const { data:movie } = useFecthMovieId(movieId);

  const handleReturn = () => {

    if( history.length <=2 ) {
        history.push('/');
    } else {
        history.goBack();
    }

}

  return (
    <div className="movies-detail">
      <div className="image-content">
        <img src={movie.image ? `${urlImage}${movie.image}` : ''} alt={movie.title} />
      </div>
      <div className="info">
        <h1>{movie.title}</h1>
        <p>
          <span>Genero: </span>
          {
            movie.genres ? movie.genres
              .map((genre) => (
                `${genre.name} ` 
              )) : null
          }
        </p>
        <p>
          <span>Año de publicación: </span> {movie.date}
        </p>
        <button 
          onClick={handleReturn}>
          Return
        </button>
        <div className="authors">
          <CardAuthor movieId={movieId} />
        </div>
      </div>
    </div>
  );
};
