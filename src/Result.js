import './Result.css'
import React from 'react'

export const Result = ({
  name,
  artistName,
  profile_path,
  url,
  copyright
}) => (
  <a href={url} target="_blank">
    <article
      className="result"
      style={{
        background: `center / contain no-repeat url('//image.tmdb.org/t/p/original${profile_path}')`
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
  </a>
)
