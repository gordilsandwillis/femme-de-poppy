import React, { Fragment } from 'react';

import { Switch, Route, DefaultRoute } from 'react-router-dom';

import Navigation from './containers/Navigation';
import View from './containers/View';
import About from './containers/About';
import NotFound from './containers/NotFound';

const DefaultLayout = ({ component: Component, ...props }) => (
<Route
	{...props}
	render={ (props) => {
		return (
			<Fragment>
				<Navigation {...props} />
				<Component {...props} />
			</Fragment>
		)
	}}
/>);

const routes = (
  <Switch>
    <DefaultLayout exact path="/" component={View} />
    <DefaultLayout exact path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Switch>
)

export default routes;
