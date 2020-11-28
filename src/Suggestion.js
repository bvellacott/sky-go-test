import './Suggestion.css'
import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { MovieContext } from './bindings';
import {
  getMediaType,
  getImageForResult,
} from './utils'

export const Suggestion = ({ result }) => {
  const {
    setSuggestions,
    searchType,
  } = useContext(MovieContext);
  const image = getImageForResult(result)
  const { name, title } = result
  const mediaType = searchType !== 'multi' ? searchType : getMediaType(result)
  return (
    <Link
      className="suggestion"
      to={`/details/${mediaType}/${result.id}`}
      onClick={() => setSuggestions([])}
    >
      <h3 className="suggestion__title">{name || title}</h3>
      <img
        className="suggestion__image"
        src={
          image 
            ? `//image.tmdb.org/t/p/original${image}`
            : '/im-an-actor.jpeg'
        }
      />
    </Link>
  )
}