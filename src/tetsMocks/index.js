import React from 'react';
import { MovieContext } from '../bindings';
import { MemoryRouter } from 'react-router-dom';

export const MockMovieProvider = ({ children, ...rest }) => {
  const props = {
    results: [],
    similar: [],
    suggestions: [],
    query: '',
    searchType: 'multi',
    details: jest.fn(),
    setQuery: jest.fn(),
    setSearchType: jest.fn(),
    setSuggestions: jest.fn(),
    getSearchSuggestions: jest.fn(async () => {}),
    runSearch: jest.fn(async () => {}),
    getDetails: jest.fn(async () => {}),
    getSimilar: jest.fn(async () => {}),
    ...rest,
  }
  return (
    <MovieContext.Provider value={props} >
      {children}
    </MovieContext.Provider>
  )
}

export const MockAppWrapper = (props) => (
  <MemoryRouter initialEntries={props.initialEntries}>
    <MockMovieProvider {...props} />
  </MemoryRouter>
)
