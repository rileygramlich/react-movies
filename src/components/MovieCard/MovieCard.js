import React from "react";

export default function MovieCard(props) {
  const movie = props.movie;
  console.log(movie);
  console.log(movie.posterPath)
  return (
    <div className="MovieCard">
      <a href="#" className="movie-link">
        <div className="card" style={{background: `url(${movie.posterPath})`}}>
          <h2 className="movie-title">{movie.title}</h2>
          <h3 className="movie-release">Released: {movie.releaseDate}</h3>
        </div>
      </a>
    </div>
  );
}
