import "./MyMovies.css";
import FavoritesList from "../../components/FavoritesList";
import PropTypes from "prop-types";

const MyMovies = ({ favorites, setFavorites }) => {
  return (
    <>
      <h2>My favourites</h2>
      <section className="my-favorites">
        <FavoritesList favorites={favorites} setFavorites={setFavorites} />
      </section>
    </>
  );
};

MyMovies.propTypes = {
  setFavorites: PropTypes.func,
  favorites: PropTypes.array
};


export default MyMovies;
