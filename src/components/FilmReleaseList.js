import React from 'react' 
import Film from './Film'

const FilmReleaseList = ({films}) => {

  const filmNodes = films.map((film) => {
    return (
      <Film
        key={film.id}
        name={film.name}
        url={film.url}
        id={film.id}>
      </Film>
    )
  })

  return (
    <>
      {filmNodes}
    </>
  )
}

export default FilmReleaseList