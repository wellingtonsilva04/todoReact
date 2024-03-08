import React, { useState, useRef, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../store/reducers/todos.reducer';
import { TodoInter } from '../store/todo.model';
import { RootReducer } from '../store/reducers';
import TodoItem from './todoItem';

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
            {todos.map((item: TodoInter) => (
              <TodoItem key={item.id} deleteHandler={handlerDeleteTodo} todo={item} />))}

          </ul>
        </div>
      );
    }
    return <p>Não há afazeres</p>;
  };

  return (
    <div className="App">
      <h2>Lista de Tarefas</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          onChange={(event) => setNewTodoText(event.target.value)}
          value={newTodoText}
        />
        <button type="submit">+</button>
      </form>
      {rendeList()}

    </div>
  );
}

export default TodoList;
