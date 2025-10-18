import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function MovieContainer() {
  const movies = useSelector(store => store.movies);

  // Define movie categories configuration
  const movieCategories = [
    { title: "Now Playing", data: movies?.nowPlayingMovies },
    { title: "Popular", data: movies?.popularMovies },
    { title: "Top Rated", data: movies?.topRatedMovies },
    { title: "Upcoming", data: movies?.upcomingMovies },
    { title: "Trending", data: movies?.trendingMovies },
    { title: "Horror", data: movies?.horrorMovies },
    { title: "Action", data: movies?.actionMovies },
  ];

  return (
    <div className='bg-black'>
      <div className='-mt-28 pl-4  relative z-20'>
        {movieCategories.map((category, index) => 
          category.data && (
            <MovieList 
              key={index} 
              title={category.title} 
              movies={category.data} 
            />
          )
        )}
      </div>
    </div>
  )
}

export default MovieContainer