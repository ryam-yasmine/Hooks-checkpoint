import React from "react";
import Movies from "./Movies.js";
import "./List.css";
import { Link, useNavigate } from "react-router-dom";

const Filters = ({ filterMovieByRating, setMovie, MoviesByRating }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="Filter">
        {MoviesByRating.map((e, Rating) => {
          return (
            <button onClick={() => filterMovieByRating(e)} key={e}>
              {e}
              <Link to="/Rating"></Link>
            </button>
          );
        })}
        <button onClick={() => setMovie(Movies)}>ALL</button>
        {/*<button onClick={() => HandleSort(Movies)}>Sort A-Z</button>*/}
      </div>
    </>
  );
};

export default Filters;
