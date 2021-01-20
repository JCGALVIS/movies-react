import { useState, useEffect } from "react";
import { getMovieId } from "../services/getMovieId";

export const useFecthMovieId = (movieId) => {
  const [state, setState] = useState({
    data: [],
  });

  useEffect(() => {
    getMovieId(movieId).then((movie) => {
      setState({
        data: movie,
      });
    });
  }, [movieId]);

  return state;
};
