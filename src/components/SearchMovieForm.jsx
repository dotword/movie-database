import PropTypes from "prop-types";
import { useState } from "react";

const SearchMovieForm = ({ setSearchResult, pageNumber }) => {

  const { VITE_API_KEY } = import.meta.env;
  const [radio, setRadio] = useState('movie');


  const handleChange = (e) => {
    setRadio(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const query = e.target.elements.title.value;

      const response = await fetch(
        `http://www.omdbapi.com/?s=${query}&type=${radio}&page=${pageNumber}&apikey=${VITE_API_KEY}`,
      );

      if (!response.ok)
        throw new Error("Network response error", response.StatusText);

      const data = await response.json();

      setSearchResult(data.Search);

    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button>Search</button>
    </form>
    
  );
};

SearchMovieForm.propTypes = {
  setSearchResult: PropTypes.func,
};


export default SearchMovieForm;
