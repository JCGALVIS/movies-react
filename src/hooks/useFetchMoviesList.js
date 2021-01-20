import { useState, useEffect } from 'react'
import { getListMovies } from '../services/getListMovies';

export const useFetchMoviesList = () => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getListMovies()
            .then( movie => {
                
                setState({
                    data: movie,
                    loading: false
                });
            })
    }, [])

    return state;
}