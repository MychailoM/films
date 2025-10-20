import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../api/tmdb";
import "../App.css";
import "../styles/Cast.css"

export default function Cast() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    getCast(movieId).then((data) => setCasts(data));
  }, [movieId]);

  if (casts.length === 0) return <p>Немає даних про акторів</p>;

  return (
    <div className="container">
      <ul className="list">
        {casts.map((cast) => (
          <li className="card" key={cast.id}>
            {cast.profile_path && (
              <img className="img"
                src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                alt={cast.name}
              />
            )}
            <h3 className="title">
              {cast.name} — {cast.character}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
