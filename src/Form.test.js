import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Form from './Form';

test('renders form', () => {
  render(<App />);
  const linkElement = screen.getByText('Add Todo');
  expect(linkElement).toBeInTheDocument();
});

test('renders title input field', () => {
  render(<Form />);
  expect(screen.getByPlaceholderText('Add title for your todo'))
    .toBeInTheDocument();
});

test('renders description input field', () => {
  render(<Form />);
  expect(screen.getByPlaceholderText('Add description for your todo'))
    .toBeInTheDocument();
});

test('renders a search button', () => {
  render(<Form />);
  expect(screen.getByRole('button'))
    .toHaveTextContent('Add Todo');
});

test('adds todo', async () => {
  const mockTitle = 'Buy milk';
  const mockDescription = '2l';
  render(<App />);
  userEvent.type(screen.getByPlaceholderText('Add title for your todo'), mockTitle);
  userEvent.type(screen.getByPlaceholderText('Add description for your todo'), mockDescription);
  expect(screen.getByPlaceholderText('Add title for your todo')).toHaveValue('Buy milk');
  expect(screen.getByPlaceholderText('Add title for your todo')).toHaveValue('Buy milk');
  fireEvent.click(screen.getByRole('button'));
  const todoCards = await screen.findAllByRole('listitem');
  expect(todoCards).toHaveLength(1);
  expect(todoCards[0]).toHaveTextContent('Buy milk');
  expect(todoCards[0]).toHaveTextContent('2l');
});
