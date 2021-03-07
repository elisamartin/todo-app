import React from 'react';

const TodoItem = (props) => {
	return (
		<div className="item-container">
			<div className={props.todo.complete ? 'todo-item done' : 'todo-item'} >
				{props.todo.todo}
			</div>
			{/* <button onClick={() => props.edit(props.id, 'new text')}>Edit</button> */}
			<button onClick={() => props.toggle(props.id)}>Complete</button>
			<button onClick={() => props.delete(props.id)}>Delete</button>
		</div>
	);
};

export default TodoItem;
