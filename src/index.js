import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import reducer from './reducers';
import { loadState, saveState } from './localStorage';
import Context from './Context';

import './App.css';

const persistedState = loadState();

const store = createStore(
	reducer,
	persistedState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
	saveState(store.getState());
});

ReactDOM.render(
	<Context.Provider store={store}>
		<App />
	</Context.Provider>,
	document.getElementById('root')
);
