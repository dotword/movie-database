import PropTypes from "prop-types";
import { useState } from "react";
import getMoviesResultsService from "../services/getMoviesResultsService";
import SearchResults from "./SearchResults";
import Pagination from "../utils/Pagination";

const SearchMovieForm = ({ setSearchResult, searchResult }) => {
  const [radio, setRadio] = useState("movie");
  const [pageNumber, setPageNumber] = useState(1);
  const [resultsNumber, setResultsNumber] = useState("");

  const handleChange = (e) => {
    setRadio(e.target.value);
    setPageNumber(1);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const query = e.target.elements.title.value;
      const moviesResults = await getMoviesResultsService({
        query,
        radio,
        pageNumber,
      });
      
      setSearchResult(moviesResults.Search);
      setResultsNumber(moviesResults.totalResults);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="search-form">
          <div className="radio-form">
            <input
              type="radio"
              id="movie"
              name="contentType"
              value="movie"
              checked={radio === "movie"}
              onChange={handleChange}
            />
            <label htmlFor="movie">Movie</label>
            <input
              type="radio"
              id="series"
              name="contentType"
              value="series"
              checked={radio === "series"}
              onChange={handleChange}
            />
            <label htmlFor="series">Series</label>
          </div>
          <input type="text" name="title" placeholder="Search by title" />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setPageNumber(1);
            }}
          >
            Search
          </button>
        </div>

        <SearchResults movies={searchResult} />

        {!setResultsNumber ? (
          ""
        ) : (
          <Pagination
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            searchResult={searchResult}
            resultsNumber={resultsNumber}
          />
        )}
      </form>
    </>
  );
};

SearchMovieForm.propTypes = {
  setSearchResult: PropTypes.func,
  searchResult: PropTypes.array,
};

export default SearchMovieForm;
