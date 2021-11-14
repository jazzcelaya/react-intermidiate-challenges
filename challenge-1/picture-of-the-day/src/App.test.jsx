import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PITD title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Picture of the Day/i);
  expect(linkElement).toBeInTheDocument();
});

test('When the user enters the app, the app should show the Picture of the Day.', () => {
  render(<App />);
  const mediaElement = screen.getByTestId('APOTD');
  expect(mediaElement).toBeInTheDocument();
});
