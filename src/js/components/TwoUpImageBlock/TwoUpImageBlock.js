import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Button from '../Button';

import './twoupimageblock.scss';

export class TwoUpImageBlock extends Component {

	componentDidMount () {
		// console.log('this.props ::', this.props);
	}

	componentWillMount () {
	}

	className () {
		let className = 'two-up-image-block';
		if (this.props.className) {
			className += ' ' + this.props.className;
		}
		return className;
	}

	sectionClass () {
		let bgClass = 'two-up-image-section py-1';
		if (this.props.bgClass) {
			bgClass += ' '+ this.props.bgClass;
		}
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
							<p className="h1"> {this.props.title} </p>
					) : false}	
					<div className={this.className()}>
						<div className="grid-flex v-spaced center gutter-wide">
							<div className="col-6">
								<img className="" src={'http:'+this.props.leftImage.fields.file.url}/>
								<p className="md mt-2 align-center"> {this.props.leftImage.leftImageCaption} </p>
							</div>

							<div className="col-6">
								<img className="" src={'http:'+this.props.rightImage.fields.file.url}/>
								<p className="md mt-2 align-center"> {this.props.rightImage.rightImageCaption} </p>
							</div>
						</div>
					</div>
				</div>
			</section>		
		);
	}
}

export default TwoUpImageBlock;