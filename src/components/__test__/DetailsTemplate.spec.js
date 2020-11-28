import React from 'react'
import { render, screen } from '@testing-library/react'
import { DetailsTemplate } from '../DetailsTemplate'

describe('DetailsTemplate component', () => {
  it('should not render anything if the title is missing', () => {
    render(<DetailsTemplate testid="test123" />)
    const image = screen.queryAllByTestId('test123-image')
    expect(image).toHaveLength(0)
  })

  it('should render default image if no image is provided', () => {
    render(<DetailsTemplate title="big-thing" testid="test123" />)
    const image = screen.getByTestId('test123-image')
    expect(image.src).toEqual('http://localhost/im-an-actor.jpeg')
  })

  it('should render tmbd image if provided', () => {
    render(
      <DetailsTemplate
        title="big-thing"
        testid="test123"
        image="/big-thing.png"
      />)
    const image = screen.getByTestId('test123-image')
    expect(image.src).toEqual('http://image.tmdb.org/t/p/original/big-thing.png')
  })
})
