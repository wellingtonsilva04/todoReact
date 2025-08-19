import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, updateCompleted } from '../store/reducers/todos.reducer';
import { TodoInter } from '../store/todo.model';
import { RootState } from '../store';
import TodoItem from './todoItem';

function TodoList() {
  const dispatch = useDispatch();

  const todos = useSelector((state: RootState) => state.todoState.todos);
  const handlerDeleteTodo = (id: number): void => {
    dispatch(deleteTodo(id));
  };
  const updateChechedHandler = (id: number): void => {
    dispatch(updateCompleted(id));
  };
  const rendeList = () => {
    if (todos.length > 0) {
      return (
        <ul>
          {todos.map((item: TodoInter) => (
            <TodoItem
              key={item.id}
              updateChechedHandler={updateChechedHandler}
              deleteHandler={handlerDeleteTodo}
              todo={item}
            />
          ))}
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
