import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TwoUpImageItem from '../../components/TwoUpImageItem';


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
						<div className="grid-flex v-spaced center gutter-wide">
							<div className="col">
								<TwoUpImageItem
									image={this.props.leftImage}
									className="blue"
								/>
							</div>

							<div className="col">
								<TwoUpImageItem
									image={this.props.rightImage}
									className="blue"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>		
		);
	}
}

export default TwoUpImageBlock;