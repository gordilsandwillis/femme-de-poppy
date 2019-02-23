import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, BrowserRouter } from 'react-router-dom';
import routes from './routes';
import Html from 'containers/Html';

import 'sass/setup';

/* Client render (isomorphic js) */
if (typeof document !== 'undefined') {
  ReactDOM.render(
	  	<BrowserRouter>
	  		{routes}
	  	</BrowserRouter>
		, document.getElementById('root'));
}

/* Static render (compile time) */
export default (locals) => {
	const html = ReactDOMServer.renderToStaticMarkup(
		<StaticRouter location={locals.path} context={{}}>
			<Html title={locals.title} assets={locals.assets}>
				{routes}
			</Html>
		</StaticRouter>
	);
 	return '<!DOCTYPE html>' + html;
}
