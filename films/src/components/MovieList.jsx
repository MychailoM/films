import { Link } from "react-router-dom";
import {searchMovies} from '../api/tmdb';
import { useEffect, useState } from "react";


export default function MovieList ({keyWord}){
    const [movies, setMovies] = useState([]);

    

    useEffect(() => {
        
        searchMovies(keyWord).then(setMovies)        
    }, [keyWord])

    if(movies.length === 0){
        return<p>Array is not defiend</p>
    } return (
        <>
        
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
                    <h2>{movie.title}</h2>
                    <Link to={`/movies/${movie.id}`}>click</Link>
                </li>
            ))}
        </ul>
        </>
    )
}