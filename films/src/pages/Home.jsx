import { getTrending } from "../api/tmdb";
import { useState, useEffect } from "react";
import "../styles/Home.css";
import "../App.css";

export default function Home() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrending().then(setTrending);
  }, []);

  if (trending.length === 0) {
    return <p>Loading trending movies...</p>;
  }

  return (
    <div className="container home-page-container">
      <ul className="list">
        {trending.map((trend) => (
          <li className="item flip-2-hor-top-1" key={trend.id}>
            <div className="contentWrap">
              <img
                className="img"
                src={`https://image.tmdb.org/t/p/w200${trend.poster_path}`}
                alt={trend.title || trend.name}
                loading="lazy"
              />
              <div className="item-content">
                <h3 className="title">{trend.title || trend.name}</h3>
              </div>
            </div>

            <p className="desc">{trend.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
