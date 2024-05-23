import "./MyMovies.css";
import FavoritesList from "../../components/FavoritesList";

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

export default MyMovies;
