import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../api/tmdb";
import "../App.css";
import "../styles/MovieDetails.css";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovie)
      .catch((err) => console.error(err));
  }, [movieId]);

  if (!movie) {
    return <p className="loading-text">Loading...</p>;
  }

  return (
    <div className="movie-details-container">
      <div className="movie-details-content">
        <div className="movie-poster-wrapper">
          <img
            className="movie-poster"
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            loading="lazy"
          />
        </div>

        <div className="movie-info">
          <h2 className="movie-title">{movie.title}</h2>
          <p className="movie-release">
            <strong className="label">Release Date:</strong>{" "}
            <span className="value">{movie.release_date}</span>
          </p>
          <p className="movie-rating">
            <strong className="label">Rating:</strong>{" "}
            <span className="value">{movie.vote_average}</span>
          </p>
        </div>
      </div>

      <p className="movie-overview">{movie.overview}</p>

      <div className="movie-links">
        <Link to="cast" className="movie-link">
          Actors
        </Link>
      </div>

      <div className="movie-outlet">
        <Outlet />
      </div>
    </div>
  );
}
