import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Renders the header title', () => {
  render(<Header />);
  expect(screen.getByText(/CoinStar/i)).toBeInTheDocument();
});
