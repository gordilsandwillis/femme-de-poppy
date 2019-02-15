import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as contentful from 'contentful'
import configureStore from './store';
import routes from './routes';
import Html from 'containers/Html';

import { fetchPages } from 'actions/contentful';

import 'sass/setup';

const contentfulClient = contentful.createClient({
 space: 'ynbtdqalk0it',
 accessToken: 'c39bebf835f2044abc93841667ef5dc268872dccaa8d4604532a208ffe269ec5'
});

const store = configureStore();
store.dispatch({type: 'CONTENTFUL_CLIENT_CREATED', payload : contentfulClient});

//Fetch all pages when app loads.
store.dispatch( fetchPages() );

/* Client render (isomorphic js) */
if (typeof document !== 'undefined') {
  ReactDOM.render(
  	<Provider store={store}>
	  	<BrowserRouter>
	  		{routes}
	  	</BrowserRouter>
  	</Provider>
		, document.getElementById('root'));
}

/* Static render (compile time) */
export default (locals) => {
	const html = ReactDOMServer.renderToStaticMarkup(
		<StaticRouter location={locals.path} context={{}}>
			<Html title={locals.title} assets={locals.assets}>
				<Provider store={store}>
					{routes}
				</Provider>
			</Html>
		</StaticRouter>
	);
 	return '<!DOCTYPE html>' + html;
}
