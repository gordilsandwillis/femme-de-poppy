import React, { Component } from 'react';

import './home.scss';

class Home extends Component {

	state = {
		pageView : 'home'
	}

	componentWillMount () {
	}

	componentDidMount () {
	}

	getClassName = () => {
		let className = 'page-wrap';

		if (this.state.pageView === 'about') {
			className = 'page-wrap about'
		} else if (this.state.pageView === 'buy') {
			className = 'page-wrap buy'
		} else if (this.state.pageView === 'contact') {
			className = 'page-wrap contact'
		} else if (this.state.pageView === 'poppy') {
			className = 'page-wrap poppy'
		}

		return className
	}

	returnHome = () => {
		this.setState({ pageView : 'home' })
	}

	setPageView = (page) => {
		this.setState({ pageView : page })
	}

	render() {
		return (

			<div className={this.getClassName()}>
				<div onClick={() => this.setPageView('about')}>about</div>
				<div onClick={() => this.setPageView('buy')}>buy</div>
				<div onClick={() => this.setPageView('contact')}>contact</div>
				<div onClick={() => this.setPageView('poppy')}>poppy</div>

				<h1 className="pt-margin">{this.getClassName()}</h1>

				<div onClick={this.returnHome}>back home</div>
			</div>

		);
	}
}


export default Home;