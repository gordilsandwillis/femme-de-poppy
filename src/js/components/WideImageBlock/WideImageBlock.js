import React, { Component } from 'react';

import './wideimageblock.scss';

export class WideImageBlock extends Component {

	componentDidMount () {
		// console.log('this.props ::', this.props);
	}

	className () {
		let className = 'wide-image-block';
		if (this.props.className) {
			className += ' ' + this.props.className;
		}
		return className;
	}
	
	sectionClass () {
		let bgClass = 'large-text-section';
		if (this.props.bgClass) {
			bgClass += ' '+ this.props.bgClass;
		}
		return bgClass
	}

	render() {

		return (
			<section className={this.sectionClass()}>
				<div className="container align-center">
					{this.props.title ? (
							<p className="h1">{this.props.title}</p>
					) : false}
					<div className={this.className()}>
						<img className="" src={this.props.imageSrc}/>
					</div>
				</div>
			</section>
		);
	}
}

export default WideImageBlock;