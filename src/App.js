import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import TodoList from './components/todoList';


const App = () => (
  <Provider store={store}>
    <PersistGate
      loading={null}
      persistor={persistor}
    >
      <TodoList />
    </PersistGate>
  </Provider>

);

export default App;
