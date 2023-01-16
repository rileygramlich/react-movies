import React from 'react'
import ActorCard from '../../components/ActorCard/ActorCard'

export default function ActorListPage({ movies }) {
  console.log(movies)
  //  Here we want to take the movies array and create one big array of all the actors with no dupes
  let finalSet = []
  movies.forEach(movie => {
    console.log(movie.cast)
    movie.cast.forEach(actor => {
      if (finalSet.includes(actor, 0)) {
      } else {
        finalSet.push(actor)
      }
    })
  })

  const ActorCardEls = finalSet.map(actor => (
    <ActorCard actor={actor}/>
  ))
  
  return (
    <div>
      <h1>All Actors!</h1>
      <div className="all-actors">
        {ActorCardEls}
      </div>
    </div>
  )
}
