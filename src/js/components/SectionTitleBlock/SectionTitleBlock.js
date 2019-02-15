import React, { Component } from 'react';

import './sectiontitleblock.scss';

export class SectionTitleBlock extends Component {

	componentDidMount () {
		// console.log('this.props ::', this.props);
	}

	className () {
		let className = 'section-title-block';
		if (this.props.className) {
			className += ' ' + this.props.className;
		}
		return className;
	}
	
	sectionClass () {
		let bgClass = 'section-title-section py-4';
		if (this.props.bgColor) {
			switch (this.props.bgColor) {
				case 'Blue':
					bgClass += ' bg-blue';
					break;

				case 'Light-Blue':
					bgClass += ' bg-light-blue';
					break;

				case 'White':
					bgClass += ' bg-white';
					break;

				case 'Grey':
					bgClass += ' bg-grey';
					break;	
			}
		}
		if (this.props.textColor) {
			switch (this.props.textColor) {
				case 'Black':
					bgClass += ' black-text';
					break;

				case 'White':
					bgClass += ' white-text';
					break;

				case 'Orange':
					bgClass += ' orange-text';
					break;

			}
		}
		return bgClass;
	}

	render() {

		return (
			<section className={this.sectionClass()}>
				<div className="container align-center">
					<div className={this.className()}>
						<p className="h1"> {this.props.title} </p>
					</div>
				</div>
			</section>
		);
	}
}

export default SectionTitleBlock;