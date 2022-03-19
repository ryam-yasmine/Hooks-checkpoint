import MovieCard from "./MovieCard.jsx";
import Filters from "./FilterMovies.jsx";
import Movies from "./Movies.js";
import "./List.css";
//import MovieCard from "./MovieCard.jsx";
import { useEffect, useState } from "react";
const MovieList = () => {
  const [movie, setMovie] = useState(Movies);
  //const [sortTitle, setSortTitle] = useState([]);
  const MoviesByRating = [...new Set(Movies.map((e) => e.Rating))];

  const filterMovieByRating = (currentE) => {
    const newMovie = Movies.filter((newe) => {
      return newe.Rating === currentE;
    });
    setMovie(newMovie);
  };

  //useEffect(() => {
  //  setSortTitle(sortTitle);
  //}, []);
  //const HandleSort = () => {
  // const sorted = [...sortTitle].sort((a, b) => {
  //   return a.first > b.first ? 1 : -1;
  //});
  // setSortTitle(sorted);
  //};
  return (
    <div className="Container">
      <Filters
        filterMovieByRating={filterMovieByRating}
        setMovie={setMovie}
        MoviesByRating={MoviesByRating}
        //HandleSort={HandleSort}
      />
      <div className="List">
        <MovieCard item={movie} />
      </div>
    </div>
  );
};
export default MovieList;
