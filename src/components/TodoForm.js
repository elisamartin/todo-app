import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';
import addIcon from '../icons/addIcon.svg'

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
					placeholder="Add a new task"
					onChange={this.handleChange}
				/>
				<button className="btn-icon" onClick={this.handleClick}>
					<img src={addIcon} alt="add to list" />
				</button>
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
