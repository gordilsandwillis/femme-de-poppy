import React, { Component } from 'react';

import { Button } from 'gw-ui';
import closeX from 'assets/images/close-x.png';
import closeXShadow from 'assets/images/close-x-shadow.png';

import './PageView.scss';

export class PageView extends Component {

	componentDidMount () {
		// console.log('this.props ::', this.props);
	}

	componentWillMount () {
	}

	className () {
		let className = 'page-view';
		if (this.props.className) {
			className += ' ' + this.props.className;
		}
		return className;
	}

	render() {

		return (
			<section className={this.className()}>
				<div className="view-title">
					<img className="mx-auto" src={this.props.title}/>
				</div>
				<div className="view-bg">
					<div className="ceiling">
						<img src={this.props.ceiling}/>
					</div>
					<div className="walls">
						<div className="left"><img src={this.props.wallLeft}/></div>
						<div className="center"><img src={this.props.wallCenter}/></div>
						<div className="right"><img src={this.props.wallRight}/></div>
					</div>
					<div className="floor">
						<img src={this.props.floor}/>
					</div>
				</div>
				<div className="view-content">
					{this.props.children}
				</div>
				<a onClick={this.props.closeView} className="close-x">
					{this.props.closeButton ? (
						<img src={this.props.closeButton}/>
					) : (
						<div>
							<div className="x"><img src={closeX}/></div>
							<div className="shadow"><img src={closeXShadow}/></div>
						</div>
					)}
				</a>
			</section>
		);
	}
}

export default PageView;