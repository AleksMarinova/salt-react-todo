import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';
import TodoContainer from './TodoContainer';

function App() {
  const [todos, setTodos] = useState([]);

  const getTodo = todo => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = id => {
    todos.forEach(todo => {
      if (todo.key === id) {
        const refToTodos = todos;
        const indexOfTodo = todos.indexOf(todo);
        refToTodos.splice(indexOfTodo, 1);
        setTodos([...refToTodos]);
      }
    });
  };

  const toggleDone = id => {
    todos.forEach(todo => {
      if (todo.key === id) {
        const refToTodos = todos;
        const refToTodo = { ...todo };
        const indexOfTodo = todos.indexOf(todo);
        if (refToTodo.done === false) {
          refToTodo.done = true;
          refToTodos.splice(indexOfTodo, 1);
          refToTodos.splice(indexOfTodo, 0, refToTodo);
          setTodos([...refToTodos]);
        } else if (todo.done === true) {
          refToTodo.done = false;
          refToTodos.splice(indexOfTodo, 1);
          refToTodos.splice(indexOfTodo, 0, refToTodo);
          setTodos([...refToTodos]);
        }
      }
    });
  };

  return (
    <div className="app">
      <Header title="Todo List" />
      <Form sendTodo={getTodo} />
      <TodoContainer
        todos={todos}
        toggleDone={toggleDone}
        deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
