import React from 'react'
import { render, screen } from '@testing-library/react'
import { Route } from 'react-router-dom'
import { MockAppWrapper } from '../../tetsMocks'
import { Home } from '../Home'

describe('Home component', () => {
  it('should run a search with the correct parameters', () => {
    const runSearch = jest.fn()
    render(
      <MockAppWrapper
        initialEntries={['/multi?query=alf']}
        runSearch={runSearch}
      >
        <Route path='/:searchType' component={Home} />
      </MockAppWrapper>
    )

    expect(runSearch).toHaveBeenCalledWith('multi', 'alf')
  })

  it('should render results with the results own mediaType when searchType is multi', () => {
    render(
      <MockAppWrapper
        initialEntries={['/multi?query=alf']}
        results={[{
          id: 123,
          media_type: 'movie',
        }]}
      >
        <Route path='/:searchType' component={Home} />
      </MockAppWrapper>
    )

    const resultLink = screen.getByTestId('result__link')
    expect(resultLink.href).toEqual('http://localhost/details/movie/123')
  })

  it('should render results with the common mediaType when searchType other than multi', () => {
    render(
      <MockAppWrapper
        initialEntries={['/tv?query=alf']}
        results={[{
          id: 123,
          media_type: 'movie',
        }]}
      >
        <Route path='/:searchType' component={Home} />
      </MockAppWrapper>
    )

    const resultLink = screen.getByTestId('result__link')
    expect(resultLink.href).toEqual('http://localhost/details/tv/123')
  })
})
