import React, { Component } from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

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
				<p className="h3 mb-3"> {this.props.title} </p>
				<div className="rich-text">
					<p className="md" dangerouslySetInnerHTML={{ __html: documentToHtmlString(this.props.text) }}></p>
				</div>
			</div>
		);
	}
}

export default ProcessBlurb;