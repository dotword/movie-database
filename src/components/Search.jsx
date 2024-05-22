import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import getMoviesByTitleService from "../services/getMoviesByTitleService";

const Search = ({ setSearchResult, searchResult }) => {

  const [searchParams, setSearchParams] = useSearchParams();

  const currentTitle = searchParams.get("title");


  const handleClick = (radio) => {
    if (radio) {
        setSearchParams({ type: radio });
      } else {
        setSearchParams({});
      }
  };

  const handleChange = (title) => {
    if (title) {
      setSearchParams({ s: title });
    } else {
      setSearchParams({});
    }
  };

  const handleSubmit = async () => {
    try {
      const moviesResults = await getMoviesByTitleService(currentTitle);

      setSearchResult(moviesResults.Search);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      {/* <div className="radio-form">
        <input
          type="radio"
          id="movie"
          name="contentType"
          value="movie"
          checked={radio === "movie"}
          onChange={handleClick}
        />
        <label htmlFor="movie">Movie</label>
        <input
          type="radio"
          id="series"
          name="contentType"
          value="series"
          checked={radio === "series"}
          onChange={handleClick}
        />
        <label htmlFor="series">Series</label>
      </div> */}
      <input
        type="search"
        placeholder="Enter title..."
        onChange={(e) => handleChange(e.target.value)}
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default Search;
