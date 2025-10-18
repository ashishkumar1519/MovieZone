import React from 'react'
import GptSearchBar from '../components/GptSearchBar'
import GptMovieSuggestions from '../components/GptMovieSuggestions'

function GptSearch() {
  return (
    <>
      <div className="fixed -z-10 w-full h-full">
        <img 
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_small.jpg" 
          alt="Background"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  )
}

export default GptSearch