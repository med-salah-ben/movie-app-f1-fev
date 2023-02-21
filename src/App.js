import React ,{useState} from "react";
import { Routes , Route } from "react-router-dom";

import {movieData} from "./MovieData"
import MoviesList from './components/MoviesList';
import AppNavbar from "./components/AppNavbar";
import AddMovie from "./components/AddMovie";
import Trailer from "./components/Trailer";

function App() {
  const [movies , setMovies] = useState(movieData);
  const [searchRating , setSearchRating] =useState(0);
  const [searchName , setSearchName] = useState("");

  const handleMovie = (movie)=>{
    setMovies([...movies , movie])
  }

  return (
    <div style={{backgroundColor:"#6ED0C2", height:"100vh"}}>
      <AppNavbar setSearchRating={setSearchRating} setSearchName={setSearchName} />
      <Routes>
        <Route path="/" element={<h1>Welcome To Home Page</h1>} />
      <Route path="/add" element={<AddMovie handleMovie={handleMovie} />} />
      <Route path="movies" element={<MoviesList movies={movies} searchRating={searchRating} searchName={searchName} />} />
      <Route path="/movies/trailer/:id" element={<Trailer movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
