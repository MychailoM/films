import { Link } from "react-router-dom";
import {searchMovies} from '../api/tmdb';
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";


export default function Movies (){
    const [keyWord, setKeyWord] = useState('');

    const onChange = (e) => {
        setKeyWord(e.target.value)
    }

    return (    
      <>  
        <input type="text" value={keyWord} onChange={onChange} placeholder="Enter films name" /> 
        <MovieList keyWord={keyWord}/>
        
      </>  
    )
}