

import {
	CONTENTFUL_CLIENT_CREATED,
	SITE_INFO_FOUND,
	PAGES_FOUND
} from '../actions/contentful';

const initialState = {
	site : null,
	pages : null
}


export default (state = initialState, action) => {

	console.log(action);

	switch (action.type) {

		case CONTENTFUL_CLIENT_CREATED:
			return {...state, client: action.payload}

		case SITE_INFO_FOUND:
			return {...state, site: action.payload}

		case PAGES_FOUND:
			return {...state, pages: action.payload}

		default:
			return state;

	}
}