import './Results.css'
import React from 'react';
import {
  getMediaType,
  getImageForResult,
} from './utils'
import { Result } from './Result'

export const Results = ({ mediaType, results }) => (
  <ul className="results">
    {results.map((result) => (
      <li className="results__result" key={result.id}>
        <Result
          id={result.id}
          name={result.name}
          mediaType={mediaType || getMediaType(result)}
          artistName={result.artistName}
          profile_path={getImageForResult(result)}
          url={result.url}
          copyright={result.copyright}
        />
      </li>
    ))}
  </ul>
)
