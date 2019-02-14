import React, { Component } from 'react';

import './twoupimageitem.scss';

export class TwoUpImageItem extends Component {

	componentDidMount () {
		// console.log('this.props ::', this.props);
		// this.props.image.imageSize
	}

	className () {
		let className = 'two-up-image-item';
		if (this.props.className) {
			className += ' ' + this.props.className;
		}
		return className;
	}

	render() {

		return (
			<div className={this.className()}>
				<img className="" src={this.props.image.imageSrc}/>
				<p className="md mt-2 align-center">{this.props.image.caption}</p>
			</div>
		);
	}
}

export default TwoUpImageItem;