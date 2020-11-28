import React, {
  createContext,
  useState,
} from 'react';
import { search } from './search'
import { getDetails } from './details'
import { getSimilar } from './similar'
import { searchTypes } from '../searchTypes'

export const MovieContext = createContext({});

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
    setSuggestions,
    getSearchSuggestions: (searchType, query) => {
      if (query.length < 3) {
        setSuggestions([])
      } else {
        search(searchType, query, setSuggestions)
      }
    },
    runSearch: async (
      searchType,
      query,
    ) => setFeed(await search(searchType, query)),
    getDetails: async (
      mediaType,
      id,
    ) => setDetails(await getDetails(mediaType, id)),
    getSimilar: async (
      mediaType,
      id,
    ) => setSimilar(await getSimilar(mediaType, id)),
  }
  return (
    <MovieContext.Provider value={props} >
      {children}
    </MovieContext.Provider>
  )
}
