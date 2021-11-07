import React, { useState } from 'react';

function Form({ sendTodo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !description) {
      return;
    }
    sendTodo({
      title,
      description,
      done: false,
      key: Date.now(),
    });
    setTitle('');
    setDescription('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="title" className="todo-form-title">
        Title
        <input
          placeholder="Add title for your todo"
          type="text"
          className="todo-title"
          value={title}
          onChange={e => setTitle(e.target.value)} />
      </label>
      <label htmlFor="description" className="todo-form-description">
        Description
        <input
          placeholder="Add description for your todo"
          type="text"
          className="todo-description"
          value={description}
          onChange={e => setDescription(e.target.value)} />
      </label>
      <button className="submit-button" type="submit">
        Add Todo
      </button>
    </form>
  );
}

export default Form;
