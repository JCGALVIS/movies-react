import React from "react";

import { Card } from "../../components/Card/Card";
import { useFetchMoviesList } from "../../hooks/useFetchMoviesList";

export const MoviesList = () => {
  const { data: movies } = useFetchMoviesList();

  return (
    <>
      {movies.map((movie) => (
        <Card 
          key={movie.id} 
          {...movie} 
        />
      ))}
    </>
  );
};
