import React from 'react'

import MovieCard from '../../components/MovieCard/MovieCard';

export default function MoviesListPage(props) {
  const movies = props.movies
  const MovieCardEls = props.movies.map(movie => (
    <MovieCard movie={ movie }/>
  ));

  return (
    <main>
      <h1>MoviesListPage</h1>
      <div className="all-movies">
        {MovieCardEls}
      </div>
      </main>
  )
}
