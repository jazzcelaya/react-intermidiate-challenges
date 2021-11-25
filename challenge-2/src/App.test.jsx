import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders App component without crashing', () => {
  render(<App />);
  const appElement = screen.getByTestId('app');
  expect(appElement).toBeInTheDocument();
});

test('gets redirected to login view when not authenticated', () => {
  global.window = { location: { pathname: null } };
  render(<App />);
  expect(global.window.location.pathname).toEqual('/login');
});

test('it stays in login when trying login button with no credentials', () => {
  render(<App />);
  userEvent.click(screen.getByTestId('login-button'));
  const loginElement = screen.getByTestId('login');
  expect(loginElement).toBeDefined();
});

test('it redirects to Notes component after successful login', () => {
  render(<App />);
  userEvent.type(screen.getByTestId('email-input'), 'test@wizeline.com');
  userEvent.type(screen.getByTestId('password-input'), 'wizeline123');
  userEvent.click(screen.getByTestId('login-button'));
  expect(screen.getByTestId('notes')).toBeDefined();
});

test('it stays in Login component after entering wrong credentials', () => {
  render(<App />);
  userEvent.type(screen.getByTestId('email-input'), 'test@wizeline.com');
  userEvent.type(screen.getByTestId('password-input'), 'wrongpassword');
  userEvent.click(screen.getByTestId('login-button'));
  expect(screen.getByTestId('login')).toBeDefined();
});
