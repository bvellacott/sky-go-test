import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { parse } from 'query-string'
import { MovieContext } from './bindings';
import { Results } from './Results'

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
  return <Results results={results} />;
}
