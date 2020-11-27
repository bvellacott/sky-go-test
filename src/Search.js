import './Search.css'
import React, { useContext, createRef } from 'react';
import { MovieContext } from './bindings';
import { searchTypes } from './searchTypes';

export const Search = () => {
  const {
    query,
    searchType,
    setQuery,
    setSearchType,
    search,
  } = useContext(MovieContext);
  const onSubmit = (e) => {
    e.preventDefault()
    search()
  }
  const onTypeChange = (e) => {
    setSearchType(e.target.value)
  }
  const onQueryChange = (e) => {
    console.log(e.target.value)
    setQuery(e.target.value)
  }
  return (
    <form
      data-testid="search"
      className="search"
      onSubmit={onSubmit}
    >
      <input
        ref={(el) => el && el.focus()}
        data-testid="search__input"
        className="search__input"
        type="search"
        value={query}
        onChange={onQueryChange}
      />
      <button
        data-testid="search__submit"
        className="search__submit"
        type="submit"
      >🔍</button>
      <select
        data-testid="search__select"
        className="search__select"
        onChange={onTypeChange}
        value={searchType}
      >
        {searchTypes.map(([name, value]) => (
          <option
            key={value}
            value={value}
          >
            {name}
          </option>
        ))}
      </select>
    </form>
  )
}
