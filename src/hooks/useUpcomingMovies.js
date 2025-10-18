import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TMDB_API_Options } from '../utils/constants';
import { addUpcomingMovies } from '../store/movieSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store => store.movies.upcomingMovies);

    const getUpcomingMovies = useCallback(async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', TMDB_API_Options);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }, [dispatch]);

    useEffect(() => {
        if (!upcomingMovies) {
            getUpcomingMovies();
        }
    }, [upcomingMovies, getUpcomingMovies]);
};

export default useUpcomingMovies;
