import { useState } from "react";
import SearchMovieForm from "../../components/SearchMovieForm";
import SearchResults from "../../components/SearchResults";

import "./SearchMovies.css";


const SearchMovies = () => {

    const [searchResult, setSearchResult] = useState([]);


    return (
        <section id="search-movies">
            <h2>Search movies & series</h2>
            <SearchMovieForm setSearchResult={setSearchResult}/>
            <SearchResults movies={searchResult} />
        
        </section>
    )
}

export default SearchMovies;