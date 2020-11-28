import React from 'react'
import { render, screen } from '@testing-library/react'
import { Result } from '../Result'
import { MockAppWrapper } from '../../tetsMocks'

describe('Result component', () => {
  it('should render link built from result mediaType and id', () => {
    render(
      <MockAppWrapper>
        <Result
          result={{ id: 123, media_type: 'movie' }}
        />
      </MockAppWrapper>

    )

    const link = screen.getByTestId('result__link')
    expect(link.href).toEqual('http://localhost/details/movie/123')
  })

  it('should render link built from passed mediaType and result id', () => {
    render(
      <MockAppWrapper>
        <Result
          result={{ id: 123, media_type: 'movie' }}
          mediaType="tv"
        />
      </MockAppWrapper>

    )

    const link = screen.getByTestId('result__link')
    expect(link.href).toEqual('http://localhost/details/tv/123')
  })

  it('should primarily render result name as title', () => {
    render(
      <MockAppWrapper>
        <Result
          result={{ name: 'primary', title: 'secondary' }}
          mediaType="tv"
        />
      </MockAppWrapper>

    )

    const title = screen.getByTestId('result__name')
    expect(title.textContent).toEqual('primary')
  })

  it('should secondarily render result title as title', () => {
    render(
      <MockAppWrapper>
        <Result
          result={{ title: 'secondary' }}
          mediaType="tv"
        />
      </MockAppWrapper>

    )

    const title = screen.getByTestId('result__name')
    expect(title.textContent).toEqual('secondary')
  })
})
