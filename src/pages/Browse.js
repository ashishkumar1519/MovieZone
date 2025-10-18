import Header from '../components/Header'
import useNowPlayingMovies from '../hooks/usePlayMovie'
import MainContainer from '../components/MainContainer';
import useMoviePopuplar from '../hooks/useMoviePopuplar';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useHorrorMovies from '../hooks/useHorrorMovies';
import useActionMovies from '../hooks/useActionMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch =  useSelector(store => store.gpt.showGptSearch);
  // Fetch all movie categories
  useNowPlayingMovies();
  useMoviePopuplar();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingMovies();
  useHorrorMovies();
  useActionMovies();
return (
    <div className='h-full w-full flex flex-col '>
    <Header position ="absolute top-0 left-0 right-0 z-10" />
  {
    showGptSearch ? <GptSearch /> :   <MainContainer />
  }
  
    </div>
  )
}

export default Browse
