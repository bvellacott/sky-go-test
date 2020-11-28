import './Suggestions.css'
import React, { useContext } from 'react';
import { Suggestion } from './Suggestion'
import { MovieContext } from './bindings';

export const Suggestions = () => {
  const { suggestions = [] } = useContext(MovieContext);
  return (
    <ul className="suggestions">
      {suggestions.slice(0, 5).map((result) => (
        <li
          key={result.id}
          data-testid={`suggestions__item--${result.id}`}
          className="suggestions__item"
        >
          <Suggestion result={result} />
        </li>
      ))}
    </ul>
  )
}
