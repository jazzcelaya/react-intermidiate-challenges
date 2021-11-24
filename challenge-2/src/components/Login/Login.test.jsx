import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import userEvent from '@testing-library/user-event';
import Login from './Login';

test('renders Login component without crashing', () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
  const loginElement = screen.getByTestId('login');
  expect(loginElement).toBeDefined();
});
