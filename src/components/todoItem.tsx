import React from 'react';
import { TodoInter } from '../store/todo.model';

interface TodoItemProps {
  todo: TodoInter,
  key: number,
  deleteHandler: (id: number) => void
  updateChechedHandler: (id: number) => void
}

function TodoItem({
  key, deleteHandler, updateChechedHandler, todo,
}: TodoItemProps) {
  const { id, isDone } = todo;
  return (
    <div key={key} className="itemContainer">
      <input type="checkbox" defaultChecked={isDone} onClick={() => updateChechedHandler(id)} />
      <p className={`${isDone ? 'completed' : 'incompleted'}`}>{todo.description}</p>
      <button type="button" onClick={() => deleteHandler(id)}>Excluir</button>
    </div>
  );
}
export default TodoItem;
