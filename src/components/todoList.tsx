import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../store/reducers/todos.reducer';
import { TodoInter } from '../store/todo.model';
import { RootReducer } from '../store/reducers';
import TodoItem from './todoItem';

function TodoList() {
  const dispatch = useDispatch();

  const todos: TodoInter[] = useSelector((state: RootReducer) => state.todo.todos);

  const handlerDeleteTodo = (id: number): void => {
    dispatch(deleteTodo(id));
  };

  const rendeList = () => {
    if (todos.length > 0) {
      return (
        <ul>
          {todos.map((item: TodoInter) => (
            <TodoItem key={item.id} deleteHandler={handlerDeleteTodo} todo={item} />))}
        </ul>
      );
    }
    return <p className="textListEmply">Não há afazeres</p>;
  };

  return (
    <div className="todoListContainer">
      {rendeList()}
    </div>
  );
}

export default TodoList;
