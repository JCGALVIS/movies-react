import { apiKey, urlApi } from "../constants/constants"

export const getListMovies = async(page) => {
    const resource = 'search/movie';
    const response = await fetch(`${urlApi}/${resource}?page=${page}&query=1&api_key=${apiKey}`);
    const { results } =  await response.json();

    const movies = results.map(movie => {
        return {
            id: movie.id,
            image: movie.poster_path,
            title: movie.original_title,
            date: movie.release_date
        }
    });
    
    return movies;
} 