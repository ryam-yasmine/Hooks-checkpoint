import React from "react";
import Movies from "./Movies.js";
import "./List.css";

const Filters = ({
  filterMovieByRating,
  setMovie,
  MoviesByRating,
  HandleSort,
}) => {
  return (
    <>
      <div className="Filter">
        {MoviesByRating.map((e, Rating) => {
          return (
            <button onClick={() => filterMovieByRating(e)} key={e}>
              {e}
            </button>
          );
        })}
        <button onClick={() => setMovie(Movies)}>All</button>
        {/*<button onClick={() => HandleSort(Movies)}>Sort A-Z</button>*/}
      </div>
    </>
  );
};

export default Filters;
