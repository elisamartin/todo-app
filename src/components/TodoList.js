import React from 'react';
import { addItem, completeItem, deleteItem, editItem } from '../actions';
import TodoItem from './TodoItem';
import {connect} from '../Connect';

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
						edit={props.editItem}
						handleEditClick={props.handleEditClick}
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
		deleteItem: (index) => dispatch(deleteItem(index)),
		editItem: (item) => dispatch(editItem(item))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
