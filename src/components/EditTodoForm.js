import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editItem } from '../actions';

class EditTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputText: this.props.item.todo.todo
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleClick = (event) => {
		event.preventDefault();
		this.props.editItem({index: this.props.item.id, todo: this.state.inputText}); // change for edit
        this.props.closeEditForm()
	};

	render() {
		return (
            <div className="form-edit-container">
                <form className="form-edit">
                    <p>Edit your task: </p>
                    <input
                        type="text"
                        name="inputText"
                        value={this.state.inputText}
                        placeholder="Your new task here"
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleClick}>OK</button>
                </form>
            </div>
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
		editItem: (item) => dispatch(editItem(item))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTodoForm);
