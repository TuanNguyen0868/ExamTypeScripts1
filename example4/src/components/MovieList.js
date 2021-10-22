import React from 'react'

export default function MovieList(props) {
    
    
    return (
        <>
            {props.movies.map((movie, index)=> <div className="item-movies" key={index}>
                    <img src={movie.Poster} alt="Movies" className="movies-picture"></img>
                    <div className="info-movies">
                        <p className="title-movies">Movie Name: {movie.Title}</p>
                        <p className="year-movies">Publishing year : {movie.Year}</p>
                    </div>
                </div>)}
        </>
    )
}
