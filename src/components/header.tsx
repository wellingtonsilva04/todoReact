import React, { FormEvent, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/reducers/todos.reducer';

function HeaderComponent() {
  const [newTodoText, setNewTodoText] = useState('');
  const dispatch = useDispatch();

  const inputRef = useRef(null);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (newTodoText !== '') {
      setNewTodoText('');
      dispatch(addTodo(newTodoText));
    }
  };
  return (
    <div className="headerContainer">
      <h2>Lista de Tarefas</h2>
      <form onSubmit={handleSubmit} className="containerForm">
        <input
          type="text"
          ref={inputRef}
          onChange={(event) => setNewTodoText(event.target.value)}
          value={newTodoText}
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
}

export default HeaderComponent;
