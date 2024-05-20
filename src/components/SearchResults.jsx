import { useState } from "react";
import { NavLink } from "react-router-dom";

const SearchResults = ({ movies }) => {

  if (movies.length === 0) return <h3>No results...</h3>;
  return (
    <div className="movie-list">
      {movies &&
        movies?.map((movie) => {
          return (
            <article key={movie.imdbID}>
              <NavLink to={`/${movie.imdbID}`}>

              <img src={movie.Poster} alt={movie.Title} />
              <h3>
                {movie.Title} ({movie.Year})
              </h3>
              </NavLink>
              
            </article>
          );
        })}
    </div>
  );
};

export default SearchResults;
