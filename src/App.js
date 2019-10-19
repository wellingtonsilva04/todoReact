import React from 'react';
import './App.css';
import store from './store';
import TodoList from './components/todoList';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>

  );
}

export default App;
