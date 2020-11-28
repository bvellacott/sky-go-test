import React from 'react'
import { render, screen } from '@testing-library/react'
import { Route } from 'react-router-dom'
import { MockAppWrapper } from '../../tetsMocks'
import { PersonDetails } from '../PersonDetails'

describe('PersonDetails component', () => {
  it('should run a getDetails and runSearch call with correct parameters', () => {
    const getDetails = jest.fn()
    const runSearch = jest.fn()
    render(
      <MockAppWrapper
        initialEntries={['/details/person/123']}
        details={{ name: 'depp' }}
        getDetails={getDetails}
        runSearch={runSearch}
      >
        <Route path='/details/:mediaType/:id' component={PersonDetails} />
      </MockAppWrapper>
    )

    expect(getDetails).toHaveBeenCalledWith('person', '123')
    expect(runSearch).toHaveBeenCalledWith('person', 'depp')
  })

  it('should render the profile_path from the details', () => {
    render(
      <MockAppWrapper
        initialEntries={['/details/person/123']}
        details={{
          name: 'depp',
          profile_path: '/profile.png',
        }}
      >
        <Route path='/details/:mediaType/:id' component={PersonDetails} />
      </MockAppWrapper>
    )

    const image = screen.getByTestId('person-details-image')
    expect(image.src).toEqual('http://image.tmdb.org/t/p/original/profile.png')
  })

  it('should render known_for data from resulst if found', () => {
    render(
      <MockAppWrapper
        initialEntries={['/details/person/123']}
        results={[{
          id: 123,
          name: 'depp',
          known_for: [{
            id: 456
          }],
        }]}

      >
        <Route path='/details/:mediaType/:id' component={PersonDetails} />
      </MockAppWrapper>
    )

    const result = screen.getByTestId('results__result--456')
    expect(result).toBeDefined()
  })
})
