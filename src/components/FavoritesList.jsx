import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import defaultImage from "../assets/cinema.jpg";

const FavoritesList = ({ favorites, setFavorites }) => {
  const removeFromFavorites = (movieToRemove) => {
    const favoritesFiltered = favorites.filter(
      (favorites) => favorites.imdbID !== movieToRemove
    );
    setFavorites(favoritesFiltered);
  };
console.log(favorites.length);
  if (favorites.length ===0) return <p>No favorites yet.</p>;
console.log(favorites);
  return (
    <div className="favorite-list movie-list">
      {favorites &&
        favorites?.map((favorite) => {
          return (
            <article key={favorite.imdbID}>
              <p
                className="favorite-remove"
                onClick={() => {
                  removeFromFavorites(favorite.imdbID);
                  console.log(favorite.imdbID);
                }}
              >
                ❤️
              </p>
              <NavLink to={`/${favorites.imdbID}`}>
                {favorite.Poster === "N/A" ? (
                  <img src={defaultImage} alt={favorite.Title} />
                ) : (
                  <img src={favorite.Poster} alt={favorite.Title} />
                )}

                <h3>
                  {favorite.Title} ({favorite.Year})
                </h3>
              </NavLink>
            </article>
          );
        })}
    </div>
  );
};

FavoritesList.propTypes = {
  favorites: PropTypes.array,
};

export default FavoritesList;
