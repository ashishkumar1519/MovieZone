import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TMDB_API_Options } from '../utils/constants';
import { addTrendingMovies } from '../store/movieSlice';

const useTrendingMovies = () => {
    const dispatch = useDispatch();
    const trendingMovies = useSelector(store => store.movies.trendingMovies);

    const getTrendingMovies = useCallback(async () => {
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?page=1', TMDB_API_Options);
        const json = await data.json();
        dispatch(addTrendingMovies(json.results));
    }, [dispatch]);

    useEffect(() => {
        if (!trendingMovies) {
            getTrendingMovies();
        }
    }, [trendingMovies, getTrendingMovies]);
};

export default useTrendingMovies;
