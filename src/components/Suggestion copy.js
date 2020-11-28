import './Suggestion.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MovieContext } from '../bindings'
import {
  getMediaType,
  getImageForResult,
} from './utils'

export const Suggestion = ({ result }) => {
  const {
    setSuggestions,
    searchType,
    setQuery
  } = useContext(MovieContext)
  const image = getImageForResult(result)
  const { name, title } = result
  const itemTitle = name || title
  const mediaType = searchType !== 'multi' ? searchType : getMediaType(result)
  return (
    <Link
      data-testid="suggestion"
      className="suggestion"
      to={`/details/${mediaType}/${result.id}`}
      onClick={() => {
        setSuggestions([])
        setQuery(itemTitle)
      }}
    >
      <h3 className="suggestion__title">{itemTitle}</h3>
      <img
        data-testid="suggestion__image"
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