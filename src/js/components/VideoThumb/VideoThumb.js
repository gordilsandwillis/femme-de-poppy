import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Button from '../Button';

import './videothumb.scss';

export class VideoThumb extends Component {

	componentDidMount () {
	}

	componentWillMount () {
	}

	className () {
		let className = 'video-thumb trigger modal-trigger';
		if (this.props.cardStyle) {
			className += ' card';
		}
		if (this.props.className) {
			className += ' ' + this.props.className;
		}
		return className;
	}

	render() {

		return (
				<a className={this.className()} data-modal-video-id={this.props.videoId}>
					<img src={this.props.imageSrc} />
					<p className="sm pt-2 align-center">{this.props.caption}</p>
				</a>
		);
	}
}

export default VideoThumb;