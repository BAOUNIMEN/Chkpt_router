import React from 'react'
import { useParams } from 'react-router-dom'

const Description = ({ des }) => {

    const params = useParams();
    const specificMovie = des.find(el => el.id == params.id)
    console.log(specificMovie)
    return (
        <div>
            <img src={specificMovie.posterURL} alt="" />
        </div>
    )
}

export default Description