import './Result.css'
import { Link } from 'react-router-dom'
import React from 'react'

export const Result = ({
  id,
  name,
  mediaType,
  artistName,
  profile_path,
  copyright
}) => (
  <Link to={`/details/${mediaType}/${id}`}>
    <article
      className="result"
      style={{
        background: profile_path && `center / contain no-repeat url('//image.tmdb.org/t/p/original${profile_path}')`
      }}
    >
    <div className="result__title">
      <h2 className="result__name">{name}</h2>
      <h3 className="result__artist">{artistName}</h3>
    </div>
    <div className="result__info">
      <p className="result__copyright">{copyright}</p>
    </div>
    </article>
  </Link>
)
