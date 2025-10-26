import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

function GptMovieSuggestions() {
  const gpt = useSelector((store)=> store.gpt);
  const{ searchedGptMovies ,moviename} = gpt;
  if(moviename === null){
    return null;
  }

  return (
    <div className='flex justify-center bg-black bg-opacity-80 flex-wrap flex-1 overflow-y-scroll bg-white h-[calc(100vh-88px)]'>
        {searchedGptMovies.map((moviesArray, index) => (
        <MovieList
          key={index} // ✅ unique key for each list
          movies={moviesArray}
          title={moviename[index] || `Suggestion ${index + 1}`}
        />
      ))}
    </div>
  )
}

export default GptMovieSuggestions