import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from 'store/reducer';

const middlewares = [thunk];

const enableReduxLogger = (isEnabled = false) => {
	if (isEnabled) {
		const logger = require('redux-logger').default;

		middlewares.push(logger);
	}
};

/* global process */
if (process.env.NODE_ENV !== 'production') {
	enableReduxLogger(false);
}

export const getStore = () => {
	return createStore(
		rootReducer,
		applyMiddleware(...middlewares)
	);
};
