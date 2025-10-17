import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../api/tmdb";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(err => console.error(err));
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>
  } return (
    <div>
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
      )}
      <h2>{movie.title}</h2>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> {movie.vote_average}</p>
      <p>{movie.overview}</p>

      <div style={{ marginTop: "20px" }}>
        <Link to="cast">Actors</Link> | <Link to="reviews">reviews</Link>
      </div>

      <Outlet />
    </div>
  );
}
