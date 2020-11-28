import React from 'react'
import { render, screen } from '@testing-library/react'
import { MockAppWrapper } from '../../tetsMocks'
import { App } from '../App'

describe('App component', () => {
  let title
  let footer

  beforeEach(() => {
    render(
      <MockAppWrapper>
        <App />
      </MockAppWrapper>,
    )
    title = screen.getByText('Sky movie search test')
    footer = screen.getByText('© 2020 SolidKode Ltd. All rights reserved ).')
  })

  it('should render title and footer', () => {
    expect(title).toBeDefined()
    expect(footer).toBeDefined()
  })
})
