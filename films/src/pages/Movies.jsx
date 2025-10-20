import { useState } from "react";
import MovieList from "../components/MovieList";
import "../styles/Movies.css";
import "../App.css";

export default function Movies() {
  const [keyWord, setKeyWord] = useState("");

  const onChange = (e) => {
    setKeyWord(e.target.value);
  };

  return (
    <div className="movies-page-container container">
      <input
        placeholder="Enter films name"
        className="input"
        name="text"
        type="text"
        value={keyWord}
        onChange={onChange}
      />
      <MovieList keyWord={keyWord} />
    </div>
  );
}
