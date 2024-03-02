/* export default function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }];
    case 'DELETE_TODO':
      return state.filter((elem) => elem.id !== action.payload.id);

    default:
      return state;
  }
}
*/

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TodoInter } from '../todo.model';

interface TodoReducerInterface {
  todos: TodoInter[];
}
const initialState: TodoReducerInterface = { todos: [] };

const todoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: Math.random(), description: action.payload });
      return state;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const newstate = { ...state };
      newstate.todos = [
        ...state.todos.filter((item) => item.id !== action.payload),
      ];
      return newstate;
    },
  },
});

export const { addTodo, deleteTodo } = todoReducer.actions;

export default todoReducer.reducer;
