import React from 'react'
import { IMAGE_BASE_URL } from '../utils/constants';
function MovieCard({ movie }) {

  const {poster_path, title} = movie;

  if(!poster_path){
    return null;
  }

  return (
    <div className='mr-4 cursor-pointer hover:scale-105 transition-transform duration-300 flex flex-col w-[200px]'>
      <img className='w-[200px] min-w-[200px] h-[280px] rounded-lg' src={`${IMAGE_BASE_URL}${poster_path}`} alt="" />
      <h3 className=' text-white my-2'>{title}</h3>
    </div>
  )
}

export default MovieCard