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
    <li key={key}>
      {todo.description}
      <button type="button" onClick={() => deleteHandler(id)}>Excluir</button>
    </li>
  );
}
export default TodoItem;
