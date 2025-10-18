import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

function VideoBackground({ movie_id }) {
  const trailersVideo = useSelector((store) => store.movies?.trailerVideo);
  
  // Use custom hook for API calls
  useMovieTrailer(movie_id);

  if(trailersVideo === null) return null;

  return (
    <div className='w-screen h-screen absolute top-0 left-0 -z-10 overflow-hidden'>
      <iframe
        key={trailersVideo?.id}
        className='w-full h-[80vh] scale-100 object-cover'
        src={`https://www.youtube.com/embed/${trailersVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&loop=1&playlist=${trailersVideo?.key}&start=0&end=0&fs=0&disablekb=1`}
        title='YouTube video player'
        allow='autoplay; encrypted-media'
        allowFullScreen
      />
      

    </div>
  );
}

export default VideoBackground;
