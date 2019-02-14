import React, { Component } from 'react';

import './processblurb.scss';

export class ProcessBlurb extends Component {

	componentDidMount () {
		// console.log('this.props ::', this.props);
	}

	componentWillMount () {
	}

	className () {
		let className = 'process-blurb';
		if (this.props.className) {
			className += ' ' + this.props.className;
		}
		return className;
	}

	render() {

		return (
			<div className={this.className()}>
				<h3>{this.props.title}</h3>
				<p className="mt-3">{this.props.text}</p>
			</div>
		);
	}
}

export default ProcessBlurb;