import React, { useEffect, useState } from "react";
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import SearchBox from './components/SearchBox'
import "./App.css";
import MovieListHeading from "./components/MovieListHeading";
function App() {
  // use usesate to manage the state of the movies
  const [movies, setMovies] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  return (
    <div className=" container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4  mb-4">
        <MovieListHeading heading= "Movies" />
        <SearchBox searchValue ={searchValue} setSearchValue = {setSearchValue}/>
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
