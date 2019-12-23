import React, { useState, useRef } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "../store/actions/todos";

function TodoList(props) {
  const [newTodoText, setNewTodoText] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();
    props.addTodo(newTodoText);
    console.log(props);
    setNewTodoText("");
    
  };

  const handlerDeleteTodo = (id) => {
    props.deleteTodo(id);
  }
  const rendeList = () => {
    const { todos } = props;
    console.log('todo',todos);
    return todos.length > 0 ?
      <div className="containerList">
        <ul>
          {todos.map(({ id, text }) => {
            return (
              <li key={id}>
                {text}
                <button type="button" onClick={() => handlerDeleteTodo(id)}>
                  Delete
                </button>
              </li>)
          }
          )}
        </ul>
      </div>
      : <p>Não há afazeres</p>
  }
  return (
    <div className="App">
      <h2>Lista de Compromissos</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          onChange={event => setNewTodoText(event.target.value)}
          value={newTodoText}
        />
        <button type="submit">Salvar</button>
      </form>
      {rendeList()}

    </div>
  );
}


const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);