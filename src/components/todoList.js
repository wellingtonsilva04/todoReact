import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "../store/actions/todos";
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodoText: ""
        }
    }
    handleSubmit = event => {
        event.preventDefault();

        this.props.addTodo(this.state.newTodoText);

        this.setState({ newTodoText: "" });
    };

    deleteTodo = (id) => {
       this.props.deleteTodo(id);
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        onChange={e => this.setState({ newTodoText: e.target.value })}
                        value={this.state.newTodoText}
                    />
                    <button type="submit">Salvar</button>
                </form>

                <ul>
                    {this.props.todos.map(({id,text}) => {
                        return (
                        <li key={id}>
                        {text}
                        <button type="button" onClick={() => this.deleteTodo(id)}>
                            Delete
                        </button>
                        </li>)
                        }
                    )}

                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);