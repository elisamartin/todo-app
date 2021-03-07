export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_ITEM = 'COMPLETE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';

const initialState = {
	todoList: [ { todo: 'create app', complete: true }, { todo: 'Make it work!', complete: true } ]
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				todoList: [
					...state.todoList,
					{
						todo: action.payload,
						complete: false
					}
				]
			};

		case COMPLETE_ITEM:
			return {
				...state,
				todoList: state.todoList.map((todo, index) => {
					return index === action.payload ? { ...todo, complete: !todo.complete } : todo;
				})
			};

		case DELETE_ITEM:
			return {
				...state,
				todoList: state.todoList.filter((todo, index) => {
					return index !== action.payload;
				})
			};
		
		case EDIT_ITEM:
			return {
				...state,
				todoList: state.todoList.map((todo, index) => {
					return index === action.payload.index ? { ...todo, todo: action.payload.todo} : todo;
				})
			};

		default:
			return state;
	}
};

export default reducer;
