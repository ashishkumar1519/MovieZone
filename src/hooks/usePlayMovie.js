import React,{useEffect} from 'react'
import { API_BASE_URL,TMDB_API_Options } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../store/movieSlice';
function usePlayMovie() {
const dispatch = useDispatch();
 const NowPlayMovie =  async ()=>{
    const data = await fetch(`${API_BASE_URL}/now_playing?language=en-US&page=1`,TMDB_API_Options );
    const jsonData = await data.json();
    dispatch(addNowPlayingMovies(jsonData.results))
  }

  useEffect(() => {
    NowPlayMovie();
  }, []);
}

export default usePlayMovie