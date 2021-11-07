import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoContainer from './TodoContainer';

test('adds todo', async () => {
  const mockTodo = [{
    title: 'Something',
    description: 'Something else',
    done: false,
    key: 1,
  }];
  render(<TodoContainer todos={mockTodo} />);

  const todoCards = await screen.findAllByRole('listitem');
  expect(todoCards).toHaveLength(1);
  expect(screen.getByRole('listitem'))
    .toHaveTextContent('Something');
  expect(screen.getByRole('listitem'))
    .toHaveTextContent('Something else');
});
