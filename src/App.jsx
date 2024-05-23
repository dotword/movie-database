import { Routes, Route, NavLink } from "react-router-dom";
import SearchMovies from "./pages/SearchMovies/SearchMovies";
import MyMovies from "./pages/MyMovies/MyMovies";
import MovieInfo from "./pages/MovieInfo/MovieInfo";
import { useEffect, useState } from "react";

function App() {

  const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
  const [favorites, setFavorites] = useState( storedFavorites || [] );

  const addToFavorites = (movieDetails) => {
    setFavorites([...favorites, movieDetails]);
  }  

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
      <header>
        <h1>Movie database</h1>
        <nav>
          <NavLink to="/">Search movies</NavLink>
          <NavLink to="/my-movies">My favourites</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<SearchMovies />} />
          <Route path=":id" element={<MovieInfo addToFavorites={addToFavorites} />} />
          <Route path="/my-movies" element={<MyMovies favorites={favorites} setFavorites={setFavorites} />} />
        </Routes>
      </main>
      <footer>
        <p>Carmen Salgueiro 2024@</p>
      </footer>
    </>
  );
}

export default App;
