import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import actionWrapper from 'redux-action-wrapper';
import * as contentfulActions from '../../actions/contentful';

import { Loader } from 'gw-ui';

import './Navigation.scss';

const InstaIcon = 'assets/images/instagram-icon.svg';

class Navigation extends Component {

	state = {
		menuOpen : false,
		pages : [],
		info : [],
		loading : true
	}

	openMenu = () => {
		this.setState({ menuOpen : true });
	}

	closeMenu = () => {
		this.setState({ menuOpen : false });
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
			pages : nextProps.pages.items ? nextProps.pages.items : false,
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
			<div className="header-wrap">
				<header className="header">
						<div className={this.state.menuOpen ? 'menu-icon hide' : 'menu-icon'} onClick={this.openMenu}>
							<span className="menu-toggle"></span>
						</div>
				</header>

				<div className={ this.state.menuOpen ? 'menu-wrap open': 'menu-wrap'}>
					<div className="menu-overlay" onClick={this.closeMenu}/>
					<a className="close-menu" onClick={this.closeMenu}><span className="material-icons md-36">close</span></a>
					<nav id="nav-main" className="menu" role="navigation">

						<div className="menu-section-menu">
							{this.state.pages.sort((a,b) => (a.fields.menuOrder > b.fields.menuOrder) ? 1 : ((b.fields.menuOrder > a.fields.menuOrder) ? -1 : 0)).map((page)=>{
								return (
									<Link key={page.sys.id} className="menu-link h3 py-2" onClick={this.closeMenu} to={"/"+page.fields.pageSlug}>{page.fields.title}</Link>
								)
							})}
						</div>

						<div className="menu-section-footer">

							<p className="md footer-title">@LolaDogs</p>
							{this.state.info.socialMediaLinks.fields.links.map((link)=>{
								return (
									<a key={link.sys.id} className="lg footer-social my-1" href={link.fields.linkUrl} target="_blank">{link.fields.linkText}</a>
								)
							})}

							<p className="md footer-title mt-3 mb-1">Contact Us</p>
							<div className="grid-flex no-break gutter-none mb-1">
								<div className="col no-grow">
									<p className="sm footer-letter">E</p>
								</div>
								<div className="col grow">
									<p className="sm"><a href={'mailto:' + this.state.info.emailAddress}>{this.state.info.emailAddress}</a></p>
								</div>	
							</div>
							<div className="grid-flex no-break gutter-none mb-1">
								<div className="col no-grow">
									<p className="sm footer-letter">P</p>
								</div>
								<div className="col grow">
									<p className="sm"><a href={'tel:' + this.state.info.phoneNumber.replace(/\s/g , "-")}>{this.state.info.phoneNumber.replace(/\s/g , "-")}</a></p>
								</div>
							</div>
						</div>

					</nav>
				</div>

			</div>
		);
	}
}
const mapStoreToProps = (store) => {
	return {
		pages : store.pages,
		site : store.site 
	};
};

const mapDispatchToProps = (dispatch) => {
	return actionWrapper({
		contentfulActions
	}, dispatch);
};


export default connect(mapStoreToProps, mapDispatchToProps)(Navigation);