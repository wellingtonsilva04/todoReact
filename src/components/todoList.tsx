import React, { useState, useRef, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../store/reducers/todos.reducer';
import { TodoInter } from '../store/todo.model';
import { RootReducer } from '../store/reducers';

function TodoList() {
  const [newTodoText, setNewTodoText] = useState('');

  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const todos: TodoInter[] = useSelector((state: RootReducer) => state.todo.todos);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (newTodoText !== '') {
      setNewTodoText('');
      dispatch(addTodo(newTodoText));
    }
  };

  const handlerDeleteTodo = (id: number): void => {
    dispatch(deleteTodo(id));
  };

  const rendeList = () => {
    if (todos.length > 0) {
      return (
        <div className="containerList">
          <ul>
            {todos.map(({ id, description }) => (
              <li key={id}>
                {description}
                <button
                  type="button"
                  onClick={() => handlerDeleteTodo(id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return <p>Não há afazeres</p>;
  };

  return (
    <div className="App">
      <h2>Lista de Compromissos</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          onChange={(event) => setNewTodoText(event.target.value)}
          value={newTodoText}
        />
        <button type="submit">Adicionar</button>
      </form>
      {rendeList()}

    </div>
  );
}

export default TodoList;
