import React from 'react'
import { render, screen } from '@testing-library/react';
import { Route } from 'react-router-dom';
import { Details } from './Details';
import { MockAppWrapper } from './tetsMocks';

describe('Details component', () => {
  it('should render MovieDetails', () => {
    render(
      <MockAppWrapper initialEntries={['details/movie']}>
        <Route path='details/:mediaType'>
          <Details />
        </Route>
      </MockAppWrapper>
    )
    const movieDetails = screen.queryAllByTestId('movie-details');
    const tvDetails = screen.queryAllByTestId('tv-details');
    const personDetails = screen.queryAllByTestId('person-details');
    expect(movieDetails).toHaveLength(1);
    expect(tvDetails).toHaveLength(0);
    expect(personDetails).toHaveLength(0);
  })

  it('should render TVDetails', () => {
    render(
      <MockAppWrapper initialEntries={['details/tv']}>
        <Route path='details/:mediaType'>
          <Details />
        </Route>
      </MockAppWrapper>
    )
    const movieDetails = screen.queryAllByTestId('movie-details');
    const tvDetails = screen.queryAllByTestId('tv-details');
    const personDetails = screen.queryAllByTestId('person-details');
    expect(movieDetails).toHaveLength(0);
    expect(tvDetails).toHaveLength(1);
    expect(personDetails).toHaveLength(0);
  })

  it('should render PersonDetails', () => {
    render(
      <MockAppWrapper initialEntries={['details/person']}>
        <Route path='details/:mediaType'>
          <Details />
        </Route>
      </MockAppWrapper>
    )
    const movieDetails = screen.queryAllByTestId('movie-details');
    const tvDetails = screen.queryAllByTestId('tv-details');
    const personDetails = screen.queryAllByTestId('person-details');
    expect(movieDetails).toHaveLength(0);
    expect(tvDetails).toHaveLength(0);
    expect(personDetails).toHaveLength(1);
  })
});
