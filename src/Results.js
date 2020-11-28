import './Results.css'
import React from 'react';
import { Result } from './Result'

export const getImageForResult = ({
  profile_path,
  backdrop_path,
  poster_path,
  known_for,
}) => (
  profile_path // person
  || backdrop_path // movie
  || poster_path // movie
  || (known_for && (known_for.find((kf) => kf.backdrop_path) || {}).backdrop_path) // person
)

export const getMediaType = ({ media_type, known_for_department }) => {
  if (media_type) {
    return media_type
  }
  if (known_for_department) {
    return 'person'
  }
  return 'movie'
}

export const Results = ({ results }) => (
  <ul className="results">
    {results.map((result) => (
      <li className="results__result" key={result.id}>
        <Result
          id={result.id}
          name={result.name}
          mediaType={getMediaType(result)}
          artistName={result.artistName}
          profile_path={getImageForResult(result)}
          url={result.url}
          copyright={result.copyright}
        />
      </li>
    ))}
  </ul>
)
