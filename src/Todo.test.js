import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('toggles todo', async () => {
  const mockTitle = 'Buy milk';
  const mockDescription = '2l';
  render(<App />);
  userEvent.type(screen.getByPlaceholderText('Add title for your todo'), mockTitle);
  userEvent.type(screen.getByPlaceholderText('Add description for your todo'), mockDescription);
  fireEvent.click(screen.getByRole('button'));
  const todoCards = await screen.findAllByRole('listitem');
  expect(todoCards).toHaveLength(1);
  expect(todoCards[0]).toHaveTextContent('Buy milk');
  expect(todoCards[0]).toHaveTextContent('2l');
  fireEvent.click(screen.getByRole('listitem'));
  expect(screen.getByRole('listitem'))
    .toHaveTextContent('Delete');
});
