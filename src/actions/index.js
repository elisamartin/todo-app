import { ADD_TODO, COMPLETE_ITEM, DELETE_ITEM } from '../reducers';

export const addItem = (text) => {
	return {
		type: ADD_TODO,
		payload: text
	};
};

export const completeItem = (index) => {
	return {
		type: COMPLETE_ITEM,
		payload: index
	};
};

export const deleteItem = (index) => {
	return {
		type: DELETE_ITEM,
		payload: index
	};
};
