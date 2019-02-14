import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Switch, Route, DefaultRoute } from 'react-router-dom';

import Navigation from './containers/Navigation';

// import View from './containers/View';
import Home from './containers/Home';
import About from './containers/About';
import PrivateSessions from './containers/PrivateSessions';
import TrainingVideos from './containers/TrainingVideos';
import Contact from './containers/Contact';
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

const Routes = ({pages}) => {
		if (!pages) {
			return false //show loader here
		}
		return (
		  <Switch>
		    <DefaultLayout exact path="/" component={Home} />
		    <DefaultLayout exact path="/about" component={About} />
		    <DefaultLayout exact path="/private-sessions" component={PrivateSessions} />
		    <DefaultLayout exact path="/training-videos" component={TrainingVideos} />
		    <DefaultLayout exact path="/contact" component={Contact} />
		    <Route path="*" component={NotFound} />
		  </Switch>
		)
}

const mapStoreToProps = (store) => {
	return {
		pages : store.pages
	};
};


export default connect(mapStoreToProps)(Routes);
