import React from 'react'

export default function MovieDetailPage(movie) {
  return (
    <div>MovieDetailPage
            <li>cast {movie.cast.join(", ")}</li>
    </div>
  )
}
