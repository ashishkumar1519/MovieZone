import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TMDB_API_Options } from '../utils/constants';
import { addHorrorMovies } from '../store/movieSlice';

const useHorrorMovies = () => {
    const dispatch = useDispatch();
    const horrorMovies = useSelector(store => store.movies.horrorMovies);

    const getHorrorMovies = useCallback(async () => {
        // Genre ID 27 is for Horror movies
        const data = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=27&page=1', TMDB_API_Options);
        const json = await data.json();
        dispatch(addHorrorMovies(json.results));
    }, [dispatch]);

    useEffect(() => {
        if (!horrorMovies) {
            getHorrorMovies();
        }
    }, [horrorMovies, getHorrorMovies]);
};

export default useHorrorMovies;
