import { combineReducers } from '@reduxjs/toolkit';

import todoreducer from './todos.reducer';

// Função que combina os reducers
export const rootReducer = combineReducers({
  todo: todoreducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
