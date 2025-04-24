import React from 'react'
import { useSelector } from 'react-redux'
import VideoTItle from './VideoTItle'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
      const movies = useSelector(store => store?.movie?.nowPlayingMovies)
      if(!movies) return
      const mainMovie = movies[0]
      console.log(mainMovie); 
      const {original_title, overview, id} = mainMovie;
  return (
    <div>
        <VideoTItle title={original_title} overview={overview} />
        <VideoContainer movieId={id}/>
    </div>
  )
}

export default MainContainer