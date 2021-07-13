import React from 'react' 
import './Film.css'

const Film = ({name, url}) => {
  return (
    <ul>
      <li><a class="film" href = {url}>{name}</a></li>
    </ul>
  )
}

export default Film