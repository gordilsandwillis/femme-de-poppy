import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'gw-ui';
import Slider from 'react-slick';

import './testimonialblock.scss';

export class TestimonialBlock extends Component {

	constructor(props) {
    super(props);
    // this.goToNextSlide = this.goToNextSlide.bind(this);
    // this.goToPrevSlide = this.goToPrevSlide.bind(this);
  }

	componentDidMount () {
		// console.log('this.props ::', this.props);
	}

	componentWillMount () {
	}

	className () {
		let className = 'testimonial-block';
		if (this.props.className) {
			className += ' ' + this.props.className;
		}
		return className;
	}

	// goToNextSlide = () => {
 //    this.slideshow.slickNext();
 //  }

 //  goToPrevSlide = () => {
 //    this.slideshow.slickPrev();
 //  }

	render() {

		const slideshowSettings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
      	{
      		breakpoint: 850,
      		settings : {
	      		arrow: false,
	      		dots: true,
	      		slidesToShow: 1
      		}
      	}
      ]
    };

		return (
			<div className={this.className()}>
				<div className="grid-flex v-spaced center">
					{this.props.slideshow.map( (slide, index) => {
						return (
							<div className="col align-center" key={'slide-'+index}>
								<img src={'https://'+ slide.fields.image.fields.file.url} />
								<p className="lg">{slide.fields.title}</p>
								<span className="p main-color"><em> {slide.fields.category}</em></span>
								<p>{slide.fields.description}</p>
							</div>
						)
					})}
				</div>
			</div>
		);
	}
}

export default TestimonialBlock;