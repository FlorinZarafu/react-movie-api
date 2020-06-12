import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <div>
        <img src={movie.Poster} alt="poster" />
        {movie.Title} - {movie.Year}
        <Link to={`/movie/${movie.imdbID}`}>More Detailes</Link>
      </div>
    </div>
  );
};
export default MovieCard;
