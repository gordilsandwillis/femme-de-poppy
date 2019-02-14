import React, { Component } from 'react';

import LargeTextBlock from '../../components/LargeTextBlock';
import WideImageBlock from '../../components/WideImageBlock';
import VideoGridBlock from '../../components/VideoGridBlock';
import TestimonialBlock from '../../components/TestimonialBlock';

import './trainingvideos.scss';

class TrainingVideos extends Component {

	render() {
		const videos = [
			{
				imageSrc : "https://picsum.photos/400/300",
				videoId : "gTZSBRLgIIA",
				caption : "Video Sample Caption 1"
			},
			{
				imageSrc : "https://picsum.photos/400/300",
				videoId : "gTZSBRLgIIA",
				caption : "Video Sample Caption 2"
			},
			{
				imageSrc : "https://picsum.photos/400/300",
				videoId : "gTZSBRLgIIA",
				caption : "Video Sample Caption 3"
			},
			{
				imageSrc : "https://picsum.photos/400/300",
				videoId : "gTZSBRLgIIA",
				caption : "Video Sample Caption 3"
			},
			{
				imageSrc : "https://picsum.photos/400/300",
				videoId : "gTZSBRLgIIA",
				caption : "Video Sample Caption 3"
			},
			{
				imageSrc : "https://picsum.photos/400/300",
				videoId : "gTZSBRLgIIA",
				caption : "Video Sample Caption 3"
			},
			{
				imageSrc : "https://picsum.photos/400/300",
				videoId : "gTZSBRLgIIA",
				caption : "Video Sample Caption 3"
			}
		];

		return (
			<div>
				<section className="bg-white py-margin">
					<div className="container">
						<LargeTextBlock 
							title="Lola Dogs in action!"
							text="A sample of the videos we create for clients."
							buttons=""
							cardStyle=""
							className="mt-3"
							bgClass="bg-white"
						/>

						<LargeTextBlock 
							title=""
							text="Pick up a trick or two for you own canine companion while you watch Lola Dogs enjoying their lessons."
							buttons=""
							cardStyle=""
							className="mb-2"
							bgClass="bg-white"
						/>

						<VideoGridBlock
							videos={videos}
							className="pt-4"
						/>
					</div>
				</section>
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

export default TrainingVideos;