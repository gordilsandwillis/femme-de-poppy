import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Switch, Route, DefaultRoute, withRouter } from 'react-router-dom';

import Navigation from './containers/Navigation';
import Footer from './containers/Footer';

// import View from './containers/View';
import Home from './containers/Home';
import About from './containers/About';
import PrivateSessions from './containers/PrivateSessions';
import TrainingVideos from './containers/TrainingVideos';
import Contact from './containers/Contact';
import NotFound from './containers/NotFound';

const DefaultLayout = ({ component: Component, ...props }) => {

	if (!props.pages) {
		return false //show loader here
	}

	return(
		<Route
			{...props}
			render={ (props) => {

				return (
					<Fragment>
						<Navigation {...props} />
						<Component {...props} />
						<Footer {...props} />
					</Fragment>
				)
			}}
		/>
	);


}



const mapStoreToProps = (store) => {
	return {
		pages : store.pages
	};
};


const ConnectedDefaultLayout = connect(mapStoreToProps)(DefaultLayout);

const routes = (
  <Switch>
    <ConnectedDefaultLayout exact path="/" component={Home} />
    <ConnectedDefaultLayout exact path="/home" component={Home} />
    <ConnectedDefaultLayout exact path="/about" component={About} />
    <ConnectedDefaultLayout exact path="/private-sessions" component={PrivateSessions} />
    <ConnectedDefaultLayout exact path="/training-videos" component={TrainingVideos} />
    <ConnectedDefaultLayout exact path="/contact" component={Contact} />
    <Route path="*" component={NotFound} />
  </Switch>
)

// const Routes = ({pages}) => {
// 	console.log('routes running')

// 		return (
// 		  <Switch>
// 		    <DefaultLayout exact path="/" component={Home} />
// 		    <DefaultLayout exact path="/about" component={About} />
// 		    <DefaultLayout exact path="/private-sessions" component={PrivateSessions} />
// 		    <DefaultLayout exact path="/training-videos" component={TrainingVideos} />
// 		    <DefaultLayout exact path="/contact" component={Contact} />
// 		    <Route path="*" component={NotFound} />
// 		  </Switch>
// 		)
// }

export default routes;
