import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoContainer from './VideoBackground';
import MovieContainer from './MovieContainer';

function MainContainer() {

  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  console.log(movies);

  if (!movies) return null;

  const mainmovie = movies[0];

  const { original_title, overview, id } = mainmovie;

  return (
    <div className='w-full h-[100% - 91px] '>
      <div className='relative h-[80vh] bg-gradient-to-r from-black via-transparent to-transparent overflow-hidden'>
        <VideoTitle title={original_title} overview={overview} />
        <VideoContainer movie_id={id} />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
      <MovieContainer />
      {/* Dark overlay gradient like Netflix */}
    </div>
  )
}

export default MainContainer