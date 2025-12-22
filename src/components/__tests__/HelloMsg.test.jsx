import React from "react";
import { render } from "@testing-library/react";
import HelloMessage from '../HelloMsg';

describe('HelloMessage Component', () => {
  it('renders the component correctly', () => {
    const { getByText } = render(<HelloMessage />);
    expect(getByText('Hello, React!')).toBeInTheDocument();
    expect(getByText('This is a simple React functional component.')).toBeInTheDocument();
  });

  it('applies styles correctly', () => {
    const { getByText } = render(<HelloMessage />);
    const container = getByText('Hello, React!').parentElement;
    expect(container).toHaveStyle('padding: 20px');
    expect(container).toHaveStyle('backgroundColor: #f4f4f4');
    expect(container).toHaveStyle('borderRadius: 8px');
    expect(container).toHaveStyle('textAlign: center');
    expect(container).toHaveStyle('width: 300px');
    expect(container).toHaveStyle('margin: 20px auto');

    expect(getByText('Hello, React!')).toHaveStyle('color: #333');
    expect(getByText('This is a simple React functional component.')).toHaveStyle('color: #555');
  });
});