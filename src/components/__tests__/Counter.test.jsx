import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

describe('Counter Component', () => {
  test('renders initial count value', () => {
    render(<Counter />);
    const countElement = screen.getByTestId('count-value');
    expect(countElement).toHaveTextContent('Count: 0');
  });

  test('increments count value on button click', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);
    const countElement = screen.getByTestId('count-value');
    expect(countElement).toHaveTextContent('Count: 1');
  });

  test('decrements count value on button click', () => {
    render(<Counter />);
    const decrementButton = screen.getByText('Decrement');
    fireEvent.click(decrementButton);
    const countElement = screen.getByTestId('count-value');
    expect(countElement).toHaveTextContent('Count: -1');
  });

  test('increments and decrements count value correctly', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('Increment');
    const decrementButton = screen.getByText('Decrement');

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 2');

    fireEvent.click(decrementButton);
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 1');
  });
});