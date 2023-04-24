import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">

            {/* <h3> movie.rating </h3> */}
            <img src={movie.posterURL} alt="" />
            <h3>{movie.title}</h3>

            <Link to={`/movie/${movie.id}`}>  Go to the movie description  </Link>

        </div>
    )
}

export default MovieCard