import React, { Component } from 'react';
import { connect } from 'react-redux';

import actionWrapper from 'redux-action-wrapper';
import * as contentfulActions from '../../actions/contentful';

import LargeTextBlock from '../../components/LargeTextBlock';
import WideImageBlock from '../../components/WideImageBlock';
import VideoGridBlock from '../../components/VideoGridBlock';
import TestimonialBlock from '../../components/TestimonialBlock';

import { Loader } from 'gw-ui';

import './trainingvideos.scss';

class TrainingVideos extends Component {

	state = {
		loading : true,
		title : false,
		blocks : []
	}

	componentWillMount () {

	}

	componentDidMount () {
		const { pages, contentfulActions } = this.props;
		const page = pages.items.find( (page) => page.fields.pageSlug === 'training-videos');
		contentfulActions.fetchPage(page.sys.id);

	}

	componentWillReceiveProps (nextProps) {
		// console.log('nextProps:',nextProps);
		this.setState({
			title : nextProps.page.fields.title ? nextProps.page.fields.title : false,
			blocks : nextProps.page.fields.blocks ? nextProps.page.fields.blocks : false,
			loading : false
		});
	}

	render() {

		if ( this.state.loading ){
			return <div className="loader-wrap"> <Loader className="large" /> </div>;
		}
		console.log('page blocks::::', this.state.blocks);

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
				{this.state.blocks.map((block, index )=>{
					if (block.sys.contentType.sys.id == 'largeTextBlock'){

						return (
							<LargeTextBlock
								key={'block-'+index}
								title={ block.fields.title ? block.fields.title : false}
								text={block.fields.text ? block.fields.text : false}
								buttons={block.fields.buttons ? block.fields.buttons : false}
								cardStyle={block.fields.cardStyle}
								bgColor={block.fields.backgroundColor}
								textColor={block.fields.textColor}
							/>
						)
					} else if (block.sys.contentType.sys.id == "videosBlock"){
						return (
							<VideoGridBlock
								videos={block.fields.videos}
								className="py-4"
							/>
						)
					}  else if (block.sys.contentType.sys.id == "quotesBlock"){
						return (
							<TestimonialBlock
								className="py-margin"
								slideshow={block.fields.quotes}
							/>
						)
					}
				})}
			</div>
		);
	}
}

const mapStoreToProps = (store) => {
	return {
		pages : store.pages,
		page : store.page 
	};
};

const mapDispatchToProps = (dispatch) => {
	return actionWrapper({
		contentfulActions
	}, dispatch);
};


export default connect(mapStoreToProps, mapDispatchToProps)(TrainingVideos);