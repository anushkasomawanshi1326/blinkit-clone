import React from 'react';
import { render } from '@testing-library/react';
import LoadSpinner from '../LoadSpinner';

describe('LoadSpinner Component', () => {
  it('renders the LoadSpinner component with correct attributes', () => {
    const { getByTestId } = render(<LoadSpinner />);
    const spinnerContainer = getByTestId('load-spinner');
    
    expect(spinnerContainer).toBeInTheDocument();
    expect(spinnerContainer).toHaveAttribute('aria-label', 'Loading');
    expect(spinnerContainer).toHaveClass('spinner-container');
  });

  it('renders the spinner element', () => {
    const { container } = render(<LoadSpinner />);
    const spinnerElement = container.querySelector('.spinner');
    
    expect(spinnerElement).toBeInTheDocument();
  });
});