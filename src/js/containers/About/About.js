import React, { Component } from 'react';

import LargeTextBlock from '../../components/LargeTextBlock';
import WideImageBlock from '../../components/WideImageBlock';
import TestimonialBlock from '../../components/TestimonialBlock';

import './About.scss';

class About extends Component {

	render() {
		console.log('hello about');
		return (
			<div>
				<WideImageBlock
					title="Great energy provides great results!"
					imageSrc={"https://picsum.photos/1500/1000"}
					className="mt-4"
					bgClass="bg-grey pt-margin pb-2"
				/>
				<LargeTextBlock 
					title=""
					text="Before becoming a CCPDT, I spent many years mentoring under a range of well-respected and highly accomplished dog trainers, including working for several years under trainers and consulting with greats such as Dee Ganley. My canine resume also includes five years as a veterinary assistant and two years of eye-opening shelter work."
					buttons=""
					cardStyle=""
					className=""
					bgClass="bg-grey pt-margin pb-2"
				/>

				<LargeTextBlock 
					title=""
					text="Brian Viola is a CCPDT awarded trainer who adheres to a strict ethical approach with a commitment to education & professional development. His techniques are mindful, specialized and positive goal oriented."
					buttons=""
					cardStyle=""
					className=""
					bgClass="bg-grey py-2"
				/>

				<LargeTextBlock 
					title="Our Guarantee"
					text="The CCPDT and APDT consider dog training guarantees unethical and forbid members to issue them."
					buttons=""
					cardStyle=""
					className="my-4"
					bgClass="bg-white black-text pt-margin"
				/>

				<LargeTextBlock 
					title=""
					text="What we can guarantee is that we listen to your training goals and create a customized, stress-free and fun plan around your schedule and lifestyle."
					buttons=""
					cardStyle=""
					className="my-4"
					bgClass="bg-white black-text"
				/>

				<LargeTextBlock 
					title=""
					text="We carry out that training plan with your dog, then work with you to protect the results we’ve created. Throughout the program we use only science-based positive reinforcement training methods to work with your dog (instead of against them!) so you feel good about the results you get—and the way we got them."
					buttons=""
					cardStyle=""
					className="my-4"
					bgClass="bg-white black-text"
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

export default About;