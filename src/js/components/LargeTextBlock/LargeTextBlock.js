import React, { Component } from 'react';

import { Button } from 'gw-ui';

import './largetextblock.scss';

export class LargeTextBlock extends Component {

	componentDidMount () {
		// console.log('this.props ::', this.props);
	}

	componentWillMount () {
	}

	className () {
		let className = 'large-text-block';
		if (this.props.cardStyle) {
			className += ' card';
			if (this.props.textColor){
				className += ' ' + this.props.textColor;
			}
		}
		if (this.props.className) {
			className += ' ' + this.props.className;
		}
		return className;
	}

	sectionClass () {
		let bgClass = 'large-text-section py-4';
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
					{this.props.title ? (
							<p className="h1 mb-4"> {this.props.title} </p>
					) : false}
					<div className={this.className()}>
						<div className="grid-flex center align-center">
							<div className="col">
								<div className="rich-text">
									<div className="lg mb-4" dangerouslySetInnerHTML={{ __html: documentToHtmlString(this.props.text) }}></div>
								</div>
								{this.props.buttons ? (
									this.props.buttons.map( ( button, index ) => {
										console.log('BUTTON:', button)
										return (
											<Button
												key={'button-'+index} 
												label={button.fields.buttonText}
												className={button.fields.buttonStyle + ' mt-2'}
												href={button.buttonLink}
											/>
										)
									})	
								) : false}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default LargeTextBlock;