import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import EditTodoForm from './components/EditTodoForm';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	handleEditClick = (item) => {
		this.setState({ toEdit: item })
	} 

	closeEditForm = () => {
		this.setState({ toEdit: null })
	}

	render() {
		return (
			<div className="App">
				<h1>Todo List</h1>
				<TodoForm />
				<TodoList handleEditClick={this.handleEditClick} />
				{ this.state.toEdit ?
					<EditTodoForm  item={this.state.toEdit} closeEditForm={this.closeEditForm} />
				: null}
			</div>
		);
	}
}

export default App;
