import React from 'react'

import MovieCard from './MovieCard'


const MoviesList = (props) => {
    console.log(props.movies)
  return (
    <div style={{display:"flex" , flexWrap:"wrap", justifyContent:"space-around",backgroundColor:"#6ED0C2"}}>
        {
            props.movies
            .filter((el)=>
            el.rating >= props.searchRating && 
            el.name.toLowerCase().includes(props.searchName.toLowerCase().trim())
            )
            .map((el)=>(
                <MovieCard movie={el} key={el.id} />
            ))
        }
    </div>
  )
}

export default MoviesList