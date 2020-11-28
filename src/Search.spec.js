import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Route } from 'react-router-dom';
import { MockAppWrapper } from './tetsMocks';
import { Search } from './Search';

let mockHistoryPush

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}))

describe('Search component', () => {
  beforeEach(() => {
    mockHistoryPush = jest.fn()
  })

  it('should focus on search input on render', () => {
    render(
      <MockAppWrapper
        initialEntries={['/person/123']}
      >
        <Route path='/:searchType/:id' component={Search} />
      </MockAppWrapper>
    )

    const searchInput = screen.getByTestId('search__input')

    expect(document.activeElement === searchInput).toBeTruthy()
  })

  it('should clear suggestions and redirect to new search on search submittion', () => {
    const setSuggestions = jest.fn()
    render(
      <MockAppWrapper
        initialEntries={['/person']}
        query="alf"
        searchType="tv"
        setSuggestions={setSuggestions}
      >
        <Route path='/:searchType' component={Search} />
      </MockAppWrapper>
    )

    const searchForm = screen.getByTestId('search')
    fireEvent.submit(searchForm)

    expect(setSuggestions).toHaveBeenCalledWith([])
    expect(mockHistoryPush).toHaveBeenCalledWith('/tv?query=alf')
  })

  it('should set the search type on type change', () => {
    const setSearchType = jest.fn()
    render(
      <MockAppWrapper
        initialEntries={['/person']}
        setSearchType={setSearchType}
      >
        <Route path='/:searchType' component={Search} />
      </MockAppWrapper>
    )

    const searchTypeSelect = screen.getByTestId('search__select')
    fireEvent.change(searchTypeSelect, { target: { value: 'person' } })

    expect(setSearchType).toHaveBeenCalledWith('person')
  })

  it('should call setQuery and getSearchSuggestions search input field change', () => {
    const setQuery = jest.fn()
    const getSearchSuggestions = jest.fn()
    render(
      <MockAppWrapper
        initialEntries={['/person']}
        searchType="tv"
        setQuery={setQuery}
        getSearchSuggestions={getSearchSuggestions}
      >
        <Route path='/:searchType' component={Search} />
      </MockAppWrapper>
    )

    const searchInput = screen.getByTestId('search__input')
    fireEvent.change(searchInput, { target: { value: 'alfie' } })

    expect(setQuery).toHaveBeenCalledWith('alfie')
    expect(getSearchSuggestions).toHaveBeenCalledWith('tv', 'alfie')
  })
});
