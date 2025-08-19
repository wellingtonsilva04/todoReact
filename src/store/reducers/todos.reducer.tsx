import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TodoInter } from '../todo.model';

interface TodoState {
  todos: TodoInter[];
}
const initialState: TodoState = { todos: [] };

const todoReducerSlice = createSlice({
  name: 'todostate',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: Math.random(), description: action.payload, isDone: false });
      return state;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const newstate = { ...state };
      newstate.todos = [
        ...state.todos.filter((item) => item.id !== action.payload),
      ];
      return newstate;
    },
    updateCompleted: (state, action: PayloadAction<number>) => {
      const indexUp = state.todos.findIndex((item) => item.id === action.payload);
      const upTodo = { ...state.todos[indexUp], isDone: !state.todos[indexUp].isDone };
      const newstate = { ...state };
      newstate.todos = [...newstate.todos.slice(0, indexUp),
        upTodo, ...newstate.todos.slice(indexUp + 1)];
      return newstate;
    },
  },
});

export const { addTodo, deleteTodo, updateCompleted } = todoReducerSlice.actions;

export const todoReducer = todoReducerSlice.reducer;
