import React from 'react';
import editIcon from '../icons/editIcon.svg'
import doneIcon from '../icons/doneIcon.svg'
import deleteIcon from '../icons/deleteIcon.svg'

const TodoItem = (props) => {
	return (
		<div className="item-container">
			<div className={props.todo.complete ? 'todo-item done' : 'todo-item'} >
				{props.todo.todo}
			</div>
			<div className="btn-group">
				<button className="btn-icon" onClick={() => props.handleEditClick(props)}>
					<img src={editIcon} alt="edit" />
				</button>
				<button className="btn-icon" onClick={() => props.toggle(props.id)}>
					<img src={doneIcon} alt="complete" /> 
				</button>
				<button className="btn-icon" onClick={() => props.delete(props.id)}>
					<img src={deleteIcon} alt="delete" />
				</button>
			</div>
		</div>
	);
};

export default TodoItem;
