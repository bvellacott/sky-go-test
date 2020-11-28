import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { MockAppWrapper } from '../../tetsMocks'
import { Suggestion } from '../Suggestion'

describe('Suggestion component', () => {
  it('should clear suggestions and set the query primarily to name when clicked', () => {
    const setSuggestions = jest.fn()
    const setQuery = jest.fn()
    render(
      <MockAppWrapper
        setSuggestions={setSuggestions}
        setQuery={setQuery}
        searchType="tv"
      >
        <Suggestion result={{ name: 'young bob', title: 'adolecent bob' }} />
      </MockAppWrapper>
    )

    const suggestion = screen.getByTestId('suggestion')
    fireEvent.click(suggestion)

    expect(setSuggestions).toHaveBeenCalledWith([])
    expect(setQuery).toHaveBeenCalledWith('young bob')
  })

  it('should clear suggestions and set the query secondarily to title when clicked', () => {
    const setSuggestions = jest.fn()
    const setQuery = jest.fn()
    render(
      <MockAppWrapper
        setSuggestions={setSuggestions}
        setQuery={setQuery}
        searchType="tv"
      >
        <Suggestion result={{ title: 'adolecent bob' }} />
      </MockAppWrapper>
    )

    const suggestion = screen.getByTestId('suggestion')
    fireEvent.click(suggestion)

    expect(setSuggestions).toHaveBeenCalledWith([])
    expect(setQuery).toHaveBeenCalledWith('adolecent bob')
  })

  it('should create link with result media type if search type is multi', () => {
    render(
      <MockAppWrapper
        searchType="multi"
      >
        <Suggestion result={{ id: 123, media_type: 'movie' }} />
      </MockAppWrapper>
    )

    const suggestion = screen.getByTestId('suggestion')
    expect(suggestion.href).toEqual('http://localhost/details/movie/123')
  })

  it('should create link with searchType if other than multi', () => {
    render(
      <MockAppWrapper
        searchType="tv"
      >
        <Suggestion result={{ id: 123, media_type: 'movie' }} />
      </MockAppWrapper>
    )

    const suggestion = screen.getByTestId('suggestion')
    expect(suggestion.href).toEqual('http://localhost/details/tv/123')
  })

  it('should render the default image if none provided', () => {
    render(
      <MockAppWrapper>
        <Suggestion result={{}} />
      </MockAppWrapper>
    )

    const image = screen.getByTestId('suggestion__image')
    expect(image.src).toEqual('http://localhost/im-an-actor.jpeg')
  })

  it('should render the image on the result', () => {
    render(
      <MockAppWrapper>
        <Suggestion result={{
          profile_path: '/profile.png'
        }} />
      </MockAppWrapper>
    )

    const image = screen.getByTestId('suggestion__image')
    expect(image.src).toEqual('http://image.tmdb.org/t/p/original/profile.png')
  })
})
