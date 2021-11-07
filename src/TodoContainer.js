import React from 'react';
import Todo from './Todo';

const todoContainer = ({ todos, toggleDone, deleteTodo }) => (
  <section className="todo-container">
    {
    todos.map(todo => (
      <Todo
        key={todo.key}
        todo={todo}
        index={todos.indexOf(todo)}
        toggleDone={toggleDone}
        deleteTodo={deleteTodo} />
    ))
    }
  </section>
);

export default todoContainer;
