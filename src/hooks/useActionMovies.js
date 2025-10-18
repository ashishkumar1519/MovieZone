import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TMDB_API_Options } from '../utils/constants';
import { addActionMovies } from '../store/movieSlice';

const useActionMovies = () => {
    const dispatch = useDispatch();
    const actionMovies = useSelector(store => store.movies.actionMovies);

    const getActionMovies = useCallback(async () => {
        // Genre ID 28 is for Action movies
        const data = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=28&page=1', TMDB_API_Options);
        const json = await data.json();
        dispatch(addActionMovies(json.results));
    }, [dispatch]);

    useEffect(() => {
        if (!actionMovies) {
            getActionMovies();
        }
    }, [actionMovies, getActionMovies]);
};

export default useActionMovies;
