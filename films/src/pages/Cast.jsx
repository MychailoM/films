import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../api/tmdb";

export default function Cast() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    getCast(movieId).then(data => setCasts(data))
  }, [movieId]);

  if (casts.length === 0) return <p>Немає даних про акторів</p>;

  return (
    <ul>
      {casts.map(cast => (
        <li key={cast.id}>
          {cast.profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
              alt={cast.name}
            />
          )}
          <h3>{cast.name} — {cast.character}</h3>
        </li>
      ))}
    </ul>
  );
}
