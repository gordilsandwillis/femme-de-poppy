import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'gw-ui';
import Slider from 'react-slick';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


import './testimonialblock.scss';

export class TestimonialBlock extends Component {

	constructor(props) {
    super(props);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
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

	goToNextSlide = () => {
    this.slideshow.slickNext();
  }

  goToPrevSlide = () => {
    this.slideshow.slickPrev();
  }

	render() {

		const slideshowSettings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
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
				<div className="slideshow-controls hide-md">
					<Button label=">" className="slick-arrow slick-next transparent" onClick={this.goToNextSlide} />
					<Button label="<" className="slick-arrow slick-prev transparent" onClick={this.goToPrevSlide} />
				</div>
				<Slider ref={c => (this.slideshow = c)} {...slideshowSettings}>
					{this.props.slideshow.map( (slide, index) => {
						return (
							<div key={index}>
								<div className="slide-content container align-center">
									<div className="rich-text">
										<div className="lg mb-4 quote" dangerouslySetInnerHTML={{ __html: documentToHtmlString(slide.fields.quoteText) }}></div>
									</div>
									<p className="sm"> {slide.fields.quoteAuthor} </p>
								</div>
							</div>
						)
					})}
				</Slider>
			</div>
		);
	}
}

export default TestimonialBlock;