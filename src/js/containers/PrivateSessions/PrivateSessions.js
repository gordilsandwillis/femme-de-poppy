import React, { Component } from 'react';

import LargeTextBlock from '../../components/LargeTextBlock';
import WideImageBlock from '../../components/WideImageBlock';
import TwoUpImageBlock from '../../components/TwoUpImageBlock';
import TestimonialBlock from '../../components/TestimonialBlock';


import './privatesessions.scss';

class PrivateSessions extends Component {

	render() {
		const leftImage = {
			imageSrc : 'https://picsum.photos/400/450',
			caption : 'Left Image Caption',
			imageSize : false 
		};
		const rightImage = {
			imageSrc : 'https://picsum.photos/400/900',
			caption : 'Right Image Caption',
			imageSize : true 
		};
		console.log('hello about');
		return (
			<div>
				<TwoUpImageBlock
					title="Customized Training Solutions"
					leftImage={leftImage}
					rightImage={rightImage}
					className="my-4"
					bgClass="bg-light-blue py-margin"
				/>

				<section className="py-margin bg-white black-text lola-specialties">
					<div className="container align-center">
						<h1 className="section-title my-margin">Lola Dog Specialties & Skills</h1>

						<p className="lg my-2">The basics, like sit and down</p>
						<p className="lg my-2">The challenges, like come and stay</p>
						<p className="lg my-2">Easy leash walking</p>
						<p className="lg my-2">Polite manners around other dogs</p>
						<p className="lg my-2">Polite manners with people</p>
						<p className="lg my-2">Barking, jumping, and other impulse issues</p>
						<p className="lg my-2">Fear and aggression with dogs</p>
						<p className="lg my-2">Fear and aggression with humans</p>
					</div>
				</section>

				<LargeTextBlock 
					title="What We Offer"
					text="We always start with an initial consultation from Brian. If Lola Dogs is the correct fit for you & your dog than from there we recommend an upfront commitment of at least a 2–4 week training package depending on case."
					buttons=""
					cardStyle=""
					className="mt-4"
					bgClass="bg-blue pt-margin"
				/>
				<LargeTextBlock 
					title=""
					text="Our job is to set you and your dog up for success. We take pride in a selective number of cases at a time in order to provide a high level of personalized attention to achieve maximum results years after our job is done."
					buttons=""
					cardStyle=""
					className=""
					bgClass="bg-blue"
				/>

				<LargeTextBlock 
					title=""
					text="Initial consultation fee is $175.00 USD."
					buttons=""
					cardStyle=""
					className=""
					bgClass="bg-blue"
				/>

				<LargeTextBlock 
					title="Training Packages"
					text="We are dedicated to working with you and your dog on training techniques that provide confidence. We provide weekly, monthly and yearly packages with accompanying training videos, problem solving via skype/facetime and additonal support via text message."
					buttons={[
						{
							buttonText: 'Contact Us!',
							buttonStyle: 'tertiary',
							buttonLink: '/contact'
						}
					]}
					cardStyle={true}
					className="my-4 orange"
					bgClass="bg-blue pb-margin"
				/>
				<section className="py-margin">
					<TestimonialBlock
						slideshow={[
							{
								sys: {
									id: '1'
								},
								fields: {
									image: {
										fields:{
											file: {
												url: 'picsum.photos/600/400?random'
											}
										}
									},
									title: 'Slideshow Image 1',
									category: 'Image 1 Category'
								}
							},
							{
								sys: {
									id: '2'
								},
								fields: {
									image: {
										fields:{
											file: {
												url: 'picsum.photos/600/400?random'
											}
										}
									},
									title: 'Slideshow Image 2',
									category: 'Image 2 Category'
								}
							},
							{
								sys: {
									id: '3'
								},
								fields: {
									image: {
										fields:{
											file: {
												url: 'picsum.photos/600/400?random'
											}
										}
									},
									title: 'Slideshow Image 3',
									category: 'Image 3 Category'
								}
							},
							{
								sys: {
									id: '4'
								},
								fields: {
									image: {
										fields:{
											file: {
												url: 'picsum.photos/600/400?random'
											}
										}
									},
									title: 'Slideshow Image 4',
									category: 'Image 4 Category'
								}
							},
							{
								sys: {
									id: '5'
								},
								fields: {
									image: {
										fields:{
											file: {
												url: 'picsum.photos/600/400?random'
											}
										}
									},
									title: 'Slideshow Image 5',
									category: 'Image 5 Category'
								}
							},
						]}
						className="py-margin"
					/>
				</section>
			</div>
		);
	}
}

export default PrivateSessions;