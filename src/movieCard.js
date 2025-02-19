import React from "react";

export default function MovieCard({movie}){
    return (
         <div className="card"  >
            <img className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}
                />
            <div className="card--content">
            <h3 className="card--title">{movie.title}</h3>
            <p>RELEASE DATE: {movie.release_date}</p>
            <p>RATING: <span id="rating" style={{color: movie.vote_average < 6 ? 'red' : 'green'}}>{movie.vote_average === 0 ? 'N/A' : movie.vote_average}</span></p>
            <p className="card--desc">{movie.overview}</p>
            </div>

        </div>
    )
}