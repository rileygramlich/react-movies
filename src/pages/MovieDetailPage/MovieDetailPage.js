import React from "react";
import { useParams } from "react-router-dom";

export default function MovieDetailPage({ movies }) {
  const { movieName } = useParams();
  const movie = movies.find((movie) => movie.title === movieName);

  return (
    <div className="MovieDetailpage">
      <div className="details">
        {movieName}
        <h1 className="title">{movie.title}</h1>
        <h3 className="release">{movie.releaseDate}</h3>
        <h3>Cast Members: </h3>
        <p>{movie.cast.join(", ")}</p>
      </div>
      <div
        className="card"
        style={{ background: `url(${movie.posterPath})` }}
      ></div>
    </div>
  );
}
