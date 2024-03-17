import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import TodoList from './components/todoList';
import HeaderComponent from './components/header';

function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <div className="App">
          <HeaderComponent />
          <TodoList />
        </div>

      </PersistGate>
    </Provider>
  );
}

export default App;
