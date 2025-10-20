import { Link } from "react-router-dom";
import { searchMovies } from '../api/tmdb';
import { useEffect, useState } from "react";
import "../styles/MovieList.css";

export default function MovieList({ keyWord }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies(keyWord).then(setMovies);
  }, [keyWord]);

  if (movies.length === 0) {
    return <p>Array is not defined</p>;
  }

  return (
    <ul className="list">
      {movies.map((movie) => (
        <li className="item" key={movie.id}>
          <img
            className="img"
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            loading="lazy"
          />
          <h2 className="title">{movie.title}</h2>
          <Link className="link" to={`/movies/${movie.id}`}>
            click
          </Link>
        </li>
      ))}
    </ul>
  );
}
