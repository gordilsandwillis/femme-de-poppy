import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


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
		}
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
						<div className="grid-flex center align-center">
							<div className="col">
								<div className="rich-text">
									<p className="lg mb-4" dangerouslySetInnerHTML={{ __html: documentToHtmlString(this.props.text) }}></p>
								</div>
								{this.props.buttons ? (
									this.props.buttons.map( ( button, index ) => {
										return (
											<Button
												key={'button-'+index} 
												label={button.buttonText}
												className={button.buttonStyle + 'mt-4'}
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