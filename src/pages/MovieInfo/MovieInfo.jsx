import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getMoviesByTitleService from "../../services/getMoviesByTitleService";
import "./MovieInfo.css";
import defaultImage from '../../assets/cinema.jpg';

const MovieInfo = () => {
  const [movieDetails, setMovieDetails] = useState("");

  let navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    const fetData = async () => {
      try {
        const movieFetchInfo = await getMoviesByTitleService({id});
        setMovieDetails(movieFetchInfo);

      } catch (error) {
        console.error(error.message);
      }
    };
    fetData();
  }, [id]);

  const {
    Title,
    Year,
    Rated,
    Runtime,
    imdbRating,
    Poster,
    Plot,
    Genre,
    Director,
    Writer,
    Actors,
    Country,
    Language,
  } = movieDetails;

  return (
    <>
      <section className="movie-info">
        <div className="movie-header">
          <div className="movie-header__title">
            <h2>{Title}</h2>
            <ul>
              <li>{Year}</li>
              <li>{Rated}</li>
              <li>{Runtime}</li>
            </ul>
          </div>
          <div className="movie-header__icons">
            <p>
              ImDB Score <span>{imdbRating}</span>
            </p>
            <p className="favorite">
              My Favorite <span>❤️</span>
            </p>
          </div>
        </div>

        <div className="movie-details">
        {Poster === 'N/A' ? (<img src={defaultImage} alt={Title} />) : (<img src={Poster} alt={Title} />)}
          <div className="movie-details__list">
            <div className="list-infoDetails">
              {Genre &&
                Genre.split(/\s*,\s*/).map((gen, index) => {
                  return <p key={index}>{gen}</p>;
                })}
            </div>
            <p>{Plot}</p>
            <ul>
              <li>
                Director: <span>{Director}</span>
              </li>
              <li>
                Writer: <span>{Writer}</span>
              </li>
              <li>
                Actors: <span>{Actors}</span>
              </li>
              <li>
                Contry: <span>{Country}</span>
              </li>
              <li>
                Language: <span>{Language}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <button className="back-home" onClick={() => navigate('/') }>
        Back to search
      </button>
    </>
  );
};

export default MovieInfo;
