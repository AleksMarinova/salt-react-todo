import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders form', () => {
  render(<App />);
  const header = screen.getByText('ToDo');
  expect(header).toBeInTheDocument();
});
