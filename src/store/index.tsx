import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { todoReducer } from './reducers/todos.reducer';

const persitConfig = {
  key: '@todoRoot',
  storage,
};

const rootReducer = combineReducers({
  todoState: todoReducer,
})
const persistedReducer = persistReducer(persitConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

export type StoreDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
