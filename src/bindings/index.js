import React, {
  createContext,
  useState,
} from 'react';
import { searchTypes } from '../searchTypes'

export const MovieContext = createContext({});

export const search = async (
  searchType,
  qyery,
  setFeed,
) =>  {
  try {
    const response = await fetch(
      `/api/search/${searchType}?query=${qyery}`,
    );
    if (response.ok) {
      setFeed((await response.json()))
    } else {
      console.error('failed to get results')
    }
  } catch (e) {
    console.error(e);
  }
}

export const getDetails = async (
  mediaType,
  id,
  setDetails,
) => {
  try {
    const response = await fetch(
      `/api/details/${mediaType}/${id}`,
    );
    if (response.ok) {
      setDetails((await response.json()))
    } else {
      console.error('failed to get details')
    }
  } catch (e) {
    console.error(e);
  }
}

export const fiterOutNonActors = (results) => results.filter(
  ({ known_for_department }) => !known_for_department || known_for_department === 'Acting',
)

export const MovieProvider = ({ children }) => {
  const [feed, setFeed] = useState({})
  const [searchType, setSearchType] = useState(searchTypes[0][1])
  const [query, setQuery] = useState('')
  const [details, setDetails] = useState({})
  const props = {
    results: fiterOutNonActors(feed.results || []),
    query,
    searchType,
    details,
    setQuery,
    setSearchType,
    runSearch: (searchType, query) => search(searchType, query, setFeed),
    getDetails: (mediaType, id) => getDetails(mediaType, id, setDetails),
  }
  return (
    <MovieContext.Provider value={props} >
      {children}
    </MovieContext.Provider>
  )
}
