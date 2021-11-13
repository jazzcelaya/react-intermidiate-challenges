import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PITD title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Picture of the Day/i);
  expect(linkElement).toBeInTheDocument();
});
