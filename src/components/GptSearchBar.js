import React, { useRef } from 'react'
import { lang } from '../utils/LangConstant'
import { useDispatch, useSelector } from 'react-redux';
import GptApi from '../utils/OpenAi';
import { TMDB_API_Options } from '../utils/constants';
import { addGptMoviesResults } from '../store/GptSlice';
function GptSearchBar() {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const selectedLang = useSelector((store) => store.config.lang); // Default to Hindi; replace with dynamic selection if needed

  const searchMovie = async (movieName) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, TMDB_API_Options);
    const jsonData = await data.json();
    return jsonData.results;
  }

  const handleGptSearchClick = async () => {
    console.log("Search Clicked", searchText.current.value);

    const query =   `Act as a movie recommendation engine. For the query: "${searchText.current.value}", ` +
    `return exactly 5 movie titles as a comma-separated list.`;

  const gptResult = await GptApi.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: query }],
});
    if(!gptResult.choices) {// Handle error or empty response
      console.error("No choices returned from GPT");
      return;
    }
    const gptmoviesList = gptResult.choices[0]?.message?.content.split(", ");
    // search TMDB for these movies no. promise all
    const  data = gptmoviesList.map((movieName)=>{
      return  searchMovie(movieName);
    });

    const allMovieResults = await Promise.all(data);
    
    dispatch(addGptMoviesResults( {moviename:gptmoviesList,searchResult : allMovieResults}))

  }


  return (
    <div className='flex justify-center w-full bg-black bg-opacity-80 z-[100] '>
      <form
        className='w-full md:w-1/2 bg-black bg-opacity-80 grid grid-cols-12 rounded-lg z-[100]'
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type='text'
          className='p-4 m-4 col-span-9 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500'
          placeholder={lang[selectedLang].gptSearchPlaceholder}
        />
        <button
          className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors font-semibold'
          onClick={handleGptSearchClick}
        >
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar