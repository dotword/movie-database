import SearchMovieForm from "../../components/SearchMovieForm";
import "./SearchMovies.css";

const SearchMovies = () => {
    return (
        <section id="search-movies">
            <h2>Search movies & series</h2>
            <SearchMovieForm />
        </section>
    )
}

export default SearchMovies;