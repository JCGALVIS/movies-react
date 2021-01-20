import { apiKey, urlApi } from "../constants/constants";

export const getMovieId = async (movieId) => {
  const resource = `movie/${movieId}`;
  const response = await fetch(`${urlApi}/${resource}?api_key=${apiKey}`);
  const data = await response.json();

  const movie = {
    title: data.original_title,
    genres: data.genres,
    image: data.poster_path,
    date: data.release_date,
  };

  return movie;
};
