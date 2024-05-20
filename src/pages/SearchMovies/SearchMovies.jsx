import { useState } from "react";
import SearchMovieForm from "../../components/SearchMovieForm";
import SearchResults from "../../components/SearchResults";
import Pagination from "../../utils/Pagination";
import "./SearchMovies.css";
// import ReactPaginate from "react-paginate";


const SearchMovies = () => {

    const [searchResult, setSearchResult] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    return (
        <section id="search-movies">
            <h2>Search movies & series</h2>
            <SearchMovieForm setSearchResult={setSearchResult} pageNumber={pageNumber} />
            <SearchResults movies={searchResult}/>
            <Pagination searchResult={searchResult} />
        
        </section>
    )
}

export default SearchMovies;