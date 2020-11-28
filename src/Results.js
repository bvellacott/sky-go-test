import './Results.css'
import React from 'react';
import { Result } from './Result'

export const Results = ({ mediaType, results }) => (
  <ul className="results">
    {results.map((result) => (
      <li className="results__result" key={result.id}>
        <Result result={result} mediaType={mediaType} />
      </li>
    ))}
  </ul>
)
