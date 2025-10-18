import React, { useRef } from 'react'
import { lang } from '../utils/LangConstant'
import { useSelector } from 'react-redux';
import GptApi from '../utils/OpenAi';
function GptSearchBar() {
  const searchText = useRef(null);

  const selectedLang = useSelector((store) => store.config.lang); // Default to Hindi; replace with dynamic selection if needed

  const handleGptSearchClick = async () => {
    console.log("Search Clicked", searchText.current.value);

    const query = "Act as Movie recommendation system and suggest some movie for the query" + searchText.current.value + " only give me the  5 movie name , coma seprated like the example result ahead. Example result : Inception, The Dark Knight, Interstellar, The Matrix, Fight Club";

    const gptResult = await GptApi.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: query },
      ],
    });
    if(!gptResult.choices) {// Handle error or empty response
      console.error("No choices returned from GPT");
      return;
    }
    const gptmoviesList = gptResult.choices[0]?.message?.content.split(", ");
    console.log(gptmoviesList);

    // search TMDP for these movies
    

  }


  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
      <form
        className='w-full md:w-1/2 bg-black bg-opacity-80 grid grid-cols-12 rounded-lg'
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