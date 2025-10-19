import { getTrending } from "../api/tmdb";
import { useState, useEffect } from "react";
import "../styles/Home.css"
import "../App.css";

export default function Home() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrending().then(setTrending);
  })

  if(trending.length === 0){
    return<p>Array is not defiend</p>
  } return (
    <div className="container home-page-container">
  <ul className="list">
    {trending.map((trend) => (
      <li className="item" key={trend.id}>
        <img
          className="img"
          src={`https://image.tmdb.org/t/p/w200${trend.poster_path}`}
          alt={trend.title}
          loading="lazy"
        />
        <div className="item-content">
          <h2 className="title">{trend.title}</h2>
          <p className="desc">{trend.overview}</p>
        </div>
      </li>
    ))}
  </ul>
</div>

  )
  
}

