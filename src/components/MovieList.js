import React from 'react'
import MovieCard from './MovieCard'

function MovieList({ title, movies }) {

  if (movies?.length === 0) return null;

  return (
    <div className='w-[100%] px-4 bg-black '>
      <h2 className='text-white font-semibold text-lg my-4'>{title}</h2>
      <div className='flex overflow-x-scroll hide-scrollbar'>
        {movies?.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MovieList