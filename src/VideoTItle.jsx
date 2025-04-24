import React from 'react'

const VideoTItle = ({title, overview}) => {

  return (
    <div className='w-screen aspect-video  absolute pt-48 px-24 text-white bg-gradient-to-r from-black'>
        <h1 className='text-3xl font-bold'>{title}</h1>
         <p className='w-4/12'>{overview}</p>
         <div className='my-2'>
            <button className='bg-white text-gray-700 p-2 px-6 rounded-lg'>
               ▶play
            </button>
             <button className=' mx-4 bg-gray-700 text-white p-2 px-6 rounded-lg'>
                ℹ info
             </button>
         </div>
    </div>
  )
}

export default VideoTItle