import { getTrending } from "../api/tmdb";
import { useState, useEffect } from "react";

export default function Home() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrending().then(setTrending);
  })

  if(trending.length === 0){
    return<p>Array is not defiend</p>
  } return (
    <>
    <h1>tranding films</h1>
    <ul>
      {trending.map((trend) => (
        <li key={trend.id}>
          <div>
          <h2>{trend.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w200${trend.poster_path}`} alt="trending film"/>
          </div>
          <p>{trend.overview}</p>
          </li>
      ))}
    </ul>
    </>
  )
  
}

