import { useState, useEffect } from "react";
import { getListMovies } from "../services/getListMovies";

export const useFetchMoviesList = (page) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getListMovies(page)
    .then((movie) => {
      setState({
        data: movie,
        loading: false,
      });
    });
  }, [page]);

  return state;
};
