import React from 'react'
import { Movie } from '../typing'
import Image from 'next/image'
import { baseUrl } from '../constants/movie'

interface Props {
    // when using firebase
    // movie: Movie | DocumentData
    movie: Movie
}

function Thumnail({ movie}: Props) {
  return (
    <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>
      
            <Image  src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}` }
            layout='fill'
            className='rouded-sm object-cover md:rounded'
            
        />
       
    </div>
  )
}

export default Thumnail