import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Moviecard from "./Moviecard";
import Searchicon from "./magnifying-glass.png";
const API_URL = "https://www.omdbapi.com?apikey=7001c879";
const movie1 = {
  Title: "Italian Spiderman",
  Year: "2007",
  imdbID: "tt2705436",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
};
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("naruto");
  }, []);
  return (
    <div className="app">
      <h1>C I N E M A &nbsp; V E R S E</h1>
      <div className="search">
        <input
          placeholder="Search For Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <img
          src={Searchicon}
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Moviecard movie={movie} />
          ))}
        </div>
      ) : (
        <div>
          <h2>No movie found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
