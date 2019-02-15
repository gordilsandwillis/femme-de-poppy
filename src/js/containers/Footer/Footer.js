import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import actionWrapper from 'redux-action-wrapper';
import * as contentfulActions from '../../actions/contentful';

import { Loader, Button } from 'gw-ui';

import './footer.scss';

const InstaIcon = 'assets/images/instagram-icon.svg';

class Footer extends Component {

	state = {
		loading : true,
		info : []
	}

	componentDidMount () {
		const { pages, site, contentfulActions } = this.props;
		contentfulActions.fetchSiteInfo();
		// console.log(' Navigation did mount, site:');
		// console.log(site)
		// const page = pages.items.find( (page) => page.fields.pageSlug === 'private-sessions');
		// contentfulActions.fetchPage(page.sys.id);

	}

	componentWillReceiveProps (nextProps) {
		// console.log('nextProps:',nextProps);
		this.setState({
			info : nextProps.site.items[0].fields ? nextProps.site.items[0].fields : false,
			loading : false
		});
	}

	render() {
		if ( this.state.loading ){
			return <div className="loader-wrap"> <Loader className="large" /> </div>;
		}
		// console.log('nav state : ', this.state);
		return (
			<div className="site-footer">
				<div className="container">
					<div className="grid-flex middle">
						<div className="col-4">
							<p className="md footer-title mb-1">Contact Us</p>
							<div className="grid-flex no-break gutter-none my-1 middle">
								<div className="col no-grow">
									<p className="md footer-letter">E</p>
								</div>
								<div className="col grow">
									<p className="md"><a href={'mailto:' + this.state.info.emailAddress}>{this.state.info.emailAddress}</a></p>
								</div>	
							</div>
							<div className="grid-flex no-break gutter-none my-1 middle">
								<div className="col no-grow">
									<p className="md footer-letter">P</p>
								</div>
								<div className="col grow">
									<p className="md"><a href={'tel:' + this.state.info.phoneNumber.replace(/\s/g , "-")}>{this.state.info.phoneNumber.replace(/\s/g , "-")}</a></p>
								</div>
							</div>
						</div>

						<div className="col-4">
							<p className="md footer-title mb-1">@LolaDogs</p>
							{this.state.info.socialMediaLinks.fields.links.map((link)=>{
								return (
									<a key={link.sys.id} className="footer-social my-1" href={link.fields.linkUrl} target="_blank"><p className="md">{link.fields.linkText}</p></a>
								)
							})}
						</div>

						<div className="col-4">
							<Button
								label="Book a Session"
								className='tertiary'
								href='#'
							/>
						</div>

					</div>
				</div>

			</div>
		);
	}
}
const mapStoreToProps = (store) => {
	return {
		site : store.site 
	};
};

const mapDispatchToProps = (dispatch) => {
	return actionWrapper({
		contentfulActions
	}, dispatch);
};


export default connect(mapStoreToProps, mapDispatchToProps)(Footer);