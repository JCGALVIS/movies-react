import React from "react";

import { useFetchMoviesList } from "../../hooks/useFetchMoviesList";
import { Card } from "../Card/Card";

export const CardMovies = ({ page = 1 }) => {
  const { data: movies } = useFetchMoviesList(page);

  return (
    <>
      {movies.map((movie) => (
        <Card key={movie.id} {...movie} />
      ))}
    </>
  );
};
