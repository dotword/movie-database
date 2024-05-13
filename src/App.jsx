import { Routes, Route, NavLink } from "react-router-dom";
import SearchMovies from "./pages/SearchMovies/SearchMovies";
import MyMovies from "./pages/MyMovies/MyMovies";

function App() {
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
          <Route path="/my-movies" element={<MyMovies />} />
        </Routes>
      </main>
      <footer>
        <p>Carmen Salgueiro 2024@</p>
      </footer>
    </>
  );
}

export default App;
