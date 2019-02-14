import React, { Component } from 'react';
import { connect } from 'react-redux';

import actionWrapper from 'redux-action-wrapper';
import * as contentfulActions from '../../actions/contentful';

import LargeTextBlock from '../../components/LargeTextBlock';
import WideImageBlock from '../../components/WideImageBlock';
import TwoUpImageBlock from '../../components/TwoUpImageBlock';
// import ProcessBlurb from '../../components/ProcessBlurb';
import TestimonialBlock from '../../components/TestimonialBlock';

import './home.scss';

class Home extends Component {

	// state = {
	// 	loading : true,
	// 	title : false,
	// 	topIntroText : false,
	// 	topVideo : false,
	// 	blocks : []
	// }

	componentWillMount () {
		const { fetchPages } = this.props.contentfulActions;
		fetchPages();
	}

	componentDidMount () {
		// const { pages } = this.props;
		
	}

	// getPageContent(pageId) {
	// 	console.log('getPageContent called...');
	// 	this.props.client.getEntry(pageId)
	// 	.then( (page) => {
	// 		console.log(page);
	// 	})
	// 	.catch(console.error)	
	// }

	getPageContent = (pageId) =>{
		this.props.client.getEntry(pageId)
		.then( (page) => {
			console.log('getPageContent :: page : ', page);
		})
		.catch(console.error)	
	}

	render() {
		console.log('hello Home');
		const { pages } = this.props;
		// var homePageId;
		// if ( pages && pages.length >0){
		// 	pages.map((page)=>{
		// 		if(page.fields.pageSlug == 'home'){
		// 			homePageId = page.sys.id;
		// 		}
		// 	})
		// 	console.log('homePageId', homePageId)
		// 	this.getPageContent(homePageId);
		// }

		// pages.map((page)=>{
		// 	if(page.fields.pageSlug == 'home'){
		// 		homePage = 
		// 	}
		// })
		console.log(pages);

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

		const processBlurbs = [
			{	
				title: "Training Made Easy",
				text: "My clients tend to be particularly busy dog lovers. No worries there, as I do much of the training for you, working with your dogwherever you need to see results."
			},	

			{	
				title: "Training Made Fun",
				text: "Dog training shouldn’t have to be another chore or entry on your to-do list. I’ll show you and your dog how to have fun integrating training into everyday life."
			},

			{	
				title: "Positivity Based",
				text: "Like humans, dogs learn best when they’re relaxed. That’s why I use only science-based positive training methods for results you can feel good about."
			},

			{	
				title: "Prepped For Real Life",
				text: "Lola Dogs can handle any situation. I work with your dog in real-life situations so you get good behavior at home and wherever you take your Lola Dog."
			}
		]

		const largeText1 = {
		  nodeType: 'document',
		  content: [
		    {
		      nodeType: 'paragraph',
		      content: [
		        {
		          nodeType: 'text',
		          value: 'Lola Dogs is a training service for your favorite Private Sessions four-legged friends. We offer specialized positivity based services from certified trainers in the Long Island, NY area. Learn more about who we are and our process below. Feel free to schedule a consult!',
		          marks: [],
		        },
		      ],
		    },
		  ],
		};	

		return (
			<div>
				<LargeTextBlock 
					title=""
					text={largeText1}
					buttons=""
					cardStyle={false}
					className="py-4"
					bgClass="mt-margin bg-white"
				/>

				<LargeTextBlock 
					title="Our Goal"
					text="We are dedicated to working with you and your dog on training techniques that provide confidence. Knowing your dog is calm and focused at home or outside, around other animals, and able to greet people politely with all four paws planted."
					buttons={[
						{
							buttonText: 'Learn More',
							buttonStyle: 'default',
							buttonLink: '/about'
						}
					]}
					cardStyle={true}
					className="mt-2 blue"
					bgClass="bg-white"
				/>
				<TwoUpImageBlock
					leftImage={leftImage}
					rightImage={rightImage}
					className="my-4"
				/>



			{/*
				<section className="py-margin bg-blue">
					<div className="container">
						<h1 className="section-title align-center my-margin">Our Process</h1>
						{processBlurbs.map((blurb,index)=> {
							return (
								<ProcessBlurb
									key={"process-"+index}
									title={blurb.title}
									text={blurb.text}
									className="my-4"
								/>
							)
						})}
					</div>
				</section>
			*/}
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

const mapStoreToProps = (store) => {
	return {
		pages : store.pages
	};
};

const mapDispatchToProps = (dispatch) => {
	return actionWrapper({
		contentfulActions
	}, dispatch);
};


export default connect(mapStoreToProps, mapDispatchToProps)(Home);