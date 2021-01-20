import { apiKey, urlApi } from "../constants/constants";

export const getMovieCredits = async (movieId) => {
  const resource = `movie/${movieId}/credits`;
  const response = await fetch(`${urlApi}/${resource}?api_key=${apiKey}`);
  const { cast } = await response.json();

  console.log(cast);

  const authors = cast.map(author => {
    return {
      id: author.id,
      title: author.name,
      image: author.profile_path
    }
  })

  return authors;
};
