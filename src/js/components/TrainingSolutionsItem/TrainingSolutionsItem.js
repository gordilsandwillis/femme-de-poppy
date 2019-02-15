import React, { Component } from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import './trainingsolutionsitem.scss';

export class TrainingSolutionsItem extends Component {

	componentDidMount () {
		// console.log('this.props ::', this.props);
	}

	className () {
		let className = 'training-solutions-item';
		if (this.props.className) {
			className += ' ' + this.props.className;
		}
		return className;
	}
	
	sectionClass () {
		let bgClass = 'training-solutions-section py-1';
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
				<div className="container">
					<div className={this.className()}>
						<div className="rich-text">
						<p className="md black-text title mb-2"> {this.props.title} </p>
							<p className="md text" dangerouslySetInnerHTML={{ __html: documentToHtmlString(this.props.text) }}></p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default TrainingSolutionsItem;