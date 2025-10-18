import React from 'react'

function VideoTitle({ title, overview }) {
  return (
    <div className='absolute top-1/4 left-8 z-10 w-1/2'>
      <h1 className='text-6xl font-bold text-white mb-4'>{title}</h1>
      <p className='text-white text-lg w-2/3 my-6 leading-relaxed'>{overview}</p>
      
      <div className='flex gap-4 my-6'>
        {/* Play Button - White background with black text and play icon */}
        <button className='bg-white text-black py-3 px-8 rounded flex items-center gap-2 text-lg font-semibold hover:bg-gray-200 transition-colors'>
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
          Play
        </button>
        
        {/* More Info Button - Same as login input background with white text */}
        <button className='bg-[rgba(22,22,22,0.7)] text-white py-3 px-8 rounded flex items-center gap-2 text-lg font-semibold hover:bg-[rgba(22,22,22,0.9)] transition-colors border border-gray-600'>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle