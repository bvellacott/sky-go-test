import './Result.css'
import { Link } from 'react-router-dom'
import React from 'react'
import {
  getMediaType,
  getImageForResult,
} from './utils'

export const Result = ({
  result,
  mediaType,
}) => {
  const {
    id,
    name,
    title,
    artistName,
  } = result
  const image = getImageForResult(result)
  return (
    <Link
      data-testid="result__link"
      to={`/details/${mediaType || getMediaType(result)}/${id}`}
    >
      <article
        className="result"
        style={{
          background: image 
            && `center / contain no-repeat url('//image.tmdb.org/t/p/original${image}')`
        }}
      >
      <div className="result__title">
        <h2
          data-testid="result__name"
          className="result__name"
        >
          {name || title}
        </h2>
        <h3 className="result__artist">{artistName}</h3>
      </div>
      </article>
    </Link>
  )
}


