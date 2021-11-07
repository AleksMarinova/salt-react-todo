import React from 'react';

function Todo({ todo, toggleDone, deleteTodo }) {
  if (todo.done === false) {
    return (
      <article role="listitem" className="todo-active" onClick={() => toggleDone(todo.key)} onKeyDown={() => toggleDone(todo.key)}>
        <p>{todo.title}</p>
        <p>{todo.description}</p>
      </article>
    );
  } if (todo.done === true) {
    return (
      <article role="listitem" className="todo-done" onClick={() => toggleDone(todo.key)} onKeyDown={() => toggleDone(todo.key)}>
        <p className="todo-done-text">{todo.title}</p>
        <p className="todo-done-text">{todo.description}</p>
        <button className="delete-button" type="button" onClick={() => deleteTodo(todo.key)}>Delete</button>
      </article>
    );
  }
}

export default Todo;
