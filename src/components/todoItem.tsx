import React from 'react';
import { TodoInter } from '../store/todo.model';

interface TodoItemProps {
  todo: TodoInter,
  key: number,
  deleteHandler: (id: number) => void
}

function TodoItem({ key, deleteHandler, todo }: TodoItemProps) {
  const { id } = todo;
  return (
    <div key={key} className="itemContainer">
      <p className="textDescription">{todo.description}</p>
      <button type="button" onClick={() => deleteHandler(id)}>Excluir</button>
    </div>
  );
}
export default TodoItem;
