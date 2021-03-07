import React from 'react';
import { connect } from 'react-redux';
import { addItem, completeItem, deleteItem } from '../actions';
import TodoItem from './TodoItem';

const TodoList = (props) => {
	return (
		<div className="todo-list-container">
			{props.todoList.map((todo, index) => {
				return (
					<TodoItem
						key={index}
						todo={todo}
						id={index}
						toggle={props.completeItem}
						delete={props.deleteItem}
					/>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		todoList: state.todoList
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addItem: (text) => dispatch(addItem(text)),
		completeItem: (index) => dispatch(completeItem(index)),
		deleteItem: (index) => dispatch(deleteItem(index))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
