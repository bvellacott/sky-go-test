import React from 'react';
import { render, screen } from '@testing-library/react';
import { Results } from './Results';
import { MockAppWrapper } from './tetsMocks';

describe('Result component', () => {
  it('should render an item per result', () => {
    render(
      <MockAppWrapper>
        <Results
          results={[{ id: 123 }, { id: 456 }]}
        />
      </MockAppWrapper>

    )

    const link1 = screen.getByTestId('results__result--123')
    const link2 = screen.getByTestId('results__result--456')
    expect(link1).toBeDefined()
    expect(link2).toBeDefined()
  })
});
