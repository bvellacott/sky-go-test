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

export const getSimilar = async (
  mediaType,
  id,
  setSimilar,
) => {
  try {
    const response = await fetch(
      `/api/similar/${mediaType}/${id}`,
    );
    if (response.ok) {
      setSimilar((await response.json()))
    } else {
      console.error('failed to get similar titles')
    }
  } catch (e) {
    console.error(e);
  }
}

export const MovieProvider = ({ children }) => {
  const [feed, setFeed] = useState({})
  const [suggestions, setSuggestions] = useState({})
  const [searchType, setSearchType] = useState(searchTypes[0][1])
  const [query, setQuery] = useState('')
  const [details, setDetails] = useState({})
  const [similar, setSimilar] = useState({})
  const props = {
    results: feed.results || [],
    similar: similar.results || [],
    suggestions: suggestions.results,
    query,
    searchType,
    details,
    setQuery,
    setSearchType,
    runSearch: (searchType, query) => search(searchType, query, setFeed),
    setSuggestions,
    getSearchSuggestions: (searchType, query) => {
      if (query.length < 3) {
        setSuggestions([])
      } else {
        search(searchType, query, setSuggestions)
      }
    },
    getDetails: (mediaType, id) => getDetails(mediaType, id, setDetails),
    getSimilar: (mediaType, id) => getSimilar(mediaType, id, setSimilar),
  }
  return (
    <MovieContext.Provider value={props} >
      {children}
    </MovieContext.Provider>
  )
}
