import React,{useEffect} from 'react'
import { API_BASE_URL,TMDB_API_Options } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies, addPopularMovies } from '../store/movieSlice';

function useMoviePopuplar() {
const dispatch = useDispatch();
 const NowPlayMovie =  async ()=>{
    const data = await fetch(`${API_BASE_URL}/popular?language=en-US&page=1`,TMDB_API_Options );
    const jsonData = await data.json();
    console.log("popular",jsonData.results);
    dispatch(addPopularMovies(jsonData.results))
  }

  useEffect(() => {
    NowPlayMovie();
  }, []);
}

export default useMoviePopuplar