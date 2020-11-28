import React from 'react'
import { render, screen } from '@testing-library/react'
import { Route } from 'react-router-dom'
import { MockAppWrapper } from '../../tetsMocks'
import { MovieDetails } from '../MovieDetails'

describe('MovieDetails component', () => {
  it('should run a getDetails and getSimilar call with correct parameters', () => {
    const getDetails = jest.fn()
    const getSimilar = jest.fn()
    render(
      <MockAppWrapper
        initialEntries={['/details/movie/123']}
        getDetails={getDetails}
        getSimilar={getSimilar}
      >
        <Route path='/details/:mediaType/:id' component={MovieDetails} />
      </MockAppWrapper>
    )

    expect(getDetails).toHaveBeenCalledWith('movie', '123')
    expect(getSimilar).toHaveBeenCalledWith('movie', '123')
  })

  it('should primarily render the backdrop_path from the details', () => {
    render(
      <MockAppWrapper
        initialEntries={['/details/movie/123']}
        details={{
          title: 'sdf',
          backdrop_path: '/backdrop.png',
          poster_path: '/poster.png',
        }}
      >
        <Route path='/details/:mediaType/:id' component={MovieDetails} />
      </MockAppWrapper>
    )

    const image = screen.getByTestId('movie-details-image')
    expect(image.src).toEqual('http://image.tmdb.org/t/p/original/backdrop.png')
  })

  it('should secondarily render the poster_path from the details', () => {
    render(
      <MockAppWrapper
        initialEntries={['/details/movie/123']}
        details={{
          title: 'sdf',
          poster_path: '/poster.png',
        }}
      >
        <Route path='/details/:mediaType/:id' component={MovieDetails} />
      </MockAppWrapper>
    )

    const image = screen.getByTestId('movie-details-image')
    expect(image.src).toEqual('http://image.tmdb.org/t/p/original/poster.png')
  })
})
