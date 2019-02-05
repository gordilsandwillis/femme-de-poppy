import React, { Component } from 'react';
import { connect } from 'react-redux';

import actionWrapper from 'redux-action-wrapper';
import * as contentfulActions from '../../actions/contentful';


class View extends Component {

	componentWillMount () {
		const { fetchPages } = this.props.contentfulActions;
		fetchPages();
	}


	render() {
		console.log('hello view');
		const { pages } = this.props;
		console.log(pages);
		return (
			<div><h1>Hello View</h1></div>
		);
	}
}

const mapStoreToProps = (store) => {
	return {
		pages : store.pages
	};
};

const mapDispatchToProps = (dispatch) => {
	return actionWrapper({
		contentfulActions
	}, dispatch);
};


export default connect(mapStoreToProps, mapDispatchToProps)(View);