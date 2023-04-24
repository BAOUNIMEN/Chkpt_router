import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({test}) => {
  return (
    <div className='movie-list'>
        {test.map((el) => (
          
            
            <div key={el.id}>
             <MovieCard movie={el} />
            
            </div>

        )
          )}
            </div>

  )
}

export default MovieList