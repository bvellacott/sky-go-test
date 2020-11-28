import './Search.css'
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Suggestions } from './Suggestions'
import { MovieContext } from '../bindings'
import { searchTypes } from '../searchTypes'

export const Search = () => {
  const history = useHistory()
  const [hasFocused, setHasFocused] = useState(null)
  const {
    query,
    searchType,
    setQuery,
    setSearchType,
    getSearchSuggestions,
    setSuggestions,
  } = useContext(MovieContext)
  const onSubmit = (e) => {
    e.preventDefault()
    setSuggestions([])
    history.push(`/${searchType}?query=${encodeURIComponent(query)}`)
  }
  const onTypeChange = (e) => {
    setSearchType(e.target.value)
  }
  const onQueryChange = (e) => {
    const { value } = e.target
    setQuery(value)
    getSearchSuggestions(searchType, value)
  }
  const getSearchInputRef = (el) => {
    if (!hasFocused && el) {
      el.focus()
      setHasFocused(true)
    }
  }

  return (
    <form
      data-testid="search"
      className="search"
      onSubmit={onSubmit}
    >
      <input
        ref={getSearchInputRef}
        data-testid="search__input"
        className="search__input"
        type="search"
        value={query}
        onChange={onQueryChange}
        onBlur={() => setTimeout(() => setSuggestions([]), 300)}
      />
      <Suggestions />
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
