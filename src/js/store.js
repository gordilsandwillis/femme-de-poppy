import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers/contentful';

const configureStore = () => {

	const createStoreWithMiddleware = compose(
		applyMiddleware(thunk),
	)(createStore);

	const store = createStoreWithMiddleware(reducer);

	return store;
};

export default configureStore;