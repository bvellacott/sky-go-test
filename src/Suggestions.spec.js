import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockAppWrapper } from './tetsMocks';
import { Suggestions } from './Suggestions';

describe('Suggestions component', () => {
  it('should render an item per suggestion sliced to 5', () => {
    render(
      <MockAppWrapper
        suggestions={[
          { id: 123 },
          { id: 456 },
          { id: 126 },
          { id: 436 },
          { id: 466 },
          { id: 'sixth' },
        ]}
      >
        <Suggestions />
      </MockAppWrapper>

    )

    const item1 = screen.getByTestId('suggestions__item--123')
    const item2 = screen.getByTestId('suggestions__item--456')
    const item3 = screen.getByTestId('suggestions__item--126')
    const item4 = screen.getByTestId('suggestions__item--436')
    const item5 = screen.getByTestId('suggestions__item--466')
    const item6 = screen.queryAllByTestId('suggestions__item--sixth')
    expect(item1).toBeDefined()
    expect(item2).toBeDefined()
    expect(item3).toBeDefined()
    expect(item4).toBeDefined()
    expect(item5).toBeDefined()
    expect(item6.length).toEqual(0)
  })
});
