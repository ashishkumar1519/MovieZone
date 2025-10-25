import {useEffect} from 'react'
import { API_BASE_URL,TMDB_API_Options } from '../utils/constants'
import { useDispatch } from 'react-redux';
import {addTopRatedMovies } from '../store/movieSlice';

function useTopRatedMovies() {
const dispatch = useDispatch();
 const NowPlayMovie =  async ()=>{
    const data = await fetch(`${API_BASE_URL}/top_rated?language=en-US&page=1`,TMDB_API_Options );
    const jsonData = await data.json();
    dispatch(addTopRatedMovies(jsonData.results))
  }

  useEffect(() => {
    NowPlayMovie();
  }, []);
}

export default useTopRatedMovies