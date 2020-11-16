import React from "react";

export default function SearchMovies(){
    
    const searchMovies = async (e) => {
        e.preventDefault();
        console.log(e.target.query.value);
        const query = e.target.query.value;
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=761776026685dd7cf13f09265006c973&language=en-US&query=${query}&page=1&include_adult=false`;
        const response = await fetch(url);
        const result = await response.json();
        console.log(result)
    }
    
    return (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Jurassic Park"/>
            <button className="button" type="submit">Search</button>
        </form>
    )
}