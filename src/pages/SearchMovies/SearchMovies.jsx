import { useState } from "react";
import SearchMovieForm from "../../components/SearchMovieForm";
import "./SearchMovies.css";

const SearchMovies = () => {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <section id="search-movies">
      <h2>Search movies & series</h2>
      <SearchMovieForm
        setSearchResult={setSearchResult}
        searchResult={searchResult}
      />
    </section>
  );
};

export default SearchMovies;
