import './Home.css'
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { parse } from 'query-string'
import { MovieContext } from './bindings';
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

export const Home = ({
  location,
}) => {
  const { search } = location
  const { searchType } = useParams()
  const { query } = parse(search)
  const {
    results = [],
    runSearch,
  } = useContext(MovieContext);
  useEffect(() => {
    if (searchType && query) {
      runSearch(searchType, query)
    }
  }, [searchType, query])
  return (
    <ul className="home__results">
      {results.map((result) => (
        <li className="home__result" key={result.id}>
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
  );
}
