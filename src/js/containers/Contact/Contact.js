import React, { Component } from 'react';

import LargeTextBlock from '../../components/LargeTextBlock';
import WideImageBlock from '../../components/WideImageBlock';

import './contact.scss';

class Contact extends Component {

	render() {
		return (
			<div>
				<section className="bg-grey py-margin">
					<div className="container">
						<h1 className="page-title align-center my-margin">Great energy provides great results!</h1>

						<WideImageBlock
							imageSrc={"https://picsum.photos/1500/1000"}
							className="mt-4"
						/>
						<LargeTextBlock 
							title=""
							text="Before becoming a CCPDT, I spent many years mentoring under a range of well-respected and highly accomplished dog trainers, including working for several years under trainers and consulting with greats such as Dee Ganley. My canine resume also includes five years as a veterinary assistant and two years of eye-opening shelter work."
							buttons=""
							cardStyle=""
							className="my-margin"
						/>

						<LargeTextBlock 
							title=""
							text="Brian Viola is a CCPDT awarded trainer who adheres to a strict ethical approach with a commitment to education & professional development. His techniques are mindful, specialized and positive goal oriented."
							buttons=""
							cardStyle=""
							className="my-margin"
						/>
					</div>
				</section>

				<section className="py-margin bg-white black-text">
					<div className="container">
						<h1 className="page-title align-center my-margin">Our Guarantee</h1>

						<LargeTextBlock 
							title=""
							text="The CCPDT and APDT consider dog training guarantees unethical and forbid members to issue them."
							buttons=""
							cardStyle=""
							className="my-4"
						/>

						<LargeTextBlock 
							title=""
							text="What we can guarantee is that we listen to your training goals and create a customized, stress-free and fun plan around your schedule and lifestyle."
							buttons=""
							cardStyle=""
							className="my-4"
						/>

						<LargeTextBlock 
							title=""
							text="We carry out that training plan with your dog, then work with you to protect the results we’ve created. Throughout the program we use only science-based positive reinforcement training methods to work with your dog (instead of against them!) so you feel good about the results you get—and the way we got them."
							buttons=""
							cardStyle=""
							className="my-4"
						/>
					</div>
				</section>
			</div>
		);
	}
}

export default Contact;