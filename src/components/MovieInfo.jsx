import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const { VITE_API_KEY } = import.meta.env;

const MovieInfo = () => {
  const [movieDetails, setMovieDetails] = useState("");

  const { id } = useParams();
  useEffect(() => {
    const fetData = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?i=${id}&apikey=${VITE_API_KEY}`
        );

        if (!response.ok)
          throw new Error("Network response error", response.StatusText);

        const json = await response.json();
        console.log(json);
        setMovieDetails(json);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetData();
  }, [id]);

  const {Title, Year, Rated, Runtime, imdbRating, Poster, Plot, Genre, Director, Writer, Actors, Country, Language} = movieDetails;

  return (
    <section>
      <div className="movie-header">
        <did className="movie-header__title">
          <h2>{Title}</h2>
          <ul>
            <li>{Year}</li>
            <li>{Rated}</li>
            <li>{Runtime}</li>
          </ul>
        </did>
        <div className="movie-header__icons">
          <p>ImDB Score <span>{imdbRating}</span></p>
          <p>My Favorite <span>Heart</span></p>
        </div>
      </div>

      <div className="movie-details">
        <img src={Poster} alt={Title} />
        <div className="movie-details__list">
          <ul>
            <li>{Plot}</li>
            <li>Genres: <span>{Genre}</span></li>
            <li>Director: <span>{Director}</span></li>
            <li>Writer: <span>{Writer}</span></li>
            <li>Actors: <span>{Actors}</span></li>
            <li>Contry: <span>{Country}</span></li>
            <li>Language: <span>{Language}</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MovieInfo;
