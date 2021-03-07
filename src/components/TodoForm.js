import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';

class TodoForm extends Component {
	constructor() {
		super();
		this.state = {
			inputText: ''
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleClick = (event) => {
		event.preventDefault();
		this.props.addItem(this.state.inputText);
		this.setState({
			inputText: ''
		});
	};

	render() {
		return (
			<form>
				<input
					type="text"
					name="inputText"
					value={this.state.inputText}
					placeholder="Add task"
					onChange={this.handleChange}
				/>
				<button onClick={this.handleClick}>Add</button>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todoList: state.todoList
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addItem: (text) => dispatch(addItem(text))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
