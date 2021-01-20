import { useState, useEffect } from "react";
import { getMovieId } from "../services/getMovieId";

export const useFecthMovieId = (movieId) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getMovieId(movieId)
    .then((movie) => {
      setState({
        data: movie,
        loading: false,
      });
    });
  }, [movieId]);

  return state;
};
