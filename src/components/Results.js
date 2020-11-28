import './Results.css'
import React from 'react'
import { Result } from './Result'

export const Results = ({ mediaType, results }) => (
  <ul className="results">
    {results.map((result) => (
      <li
        key={result.id}
        data-testid={`results__result--${result.id}`}
        className="results__result"
      >
        <Result result={result} mediaType={mediaType} />
      </li>
    ))}
  </ul>
)
