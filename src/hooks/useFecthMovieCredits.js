import { useState, useEffect } from "react";
import { getMovieCredits } from "../services/getMovieCredits";

export const useFecthMovieCredits = (movieId) => {
  const [state, setstate] = useState({
    data: [],
  });

  useEffect(() => {
    getMovieCredits(movieId).then((author) => {
      setstate({
        data: author,
      });
    });
  }, [movieId]);

  return state;
};
