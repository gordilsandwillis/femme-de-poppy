import React, { Component } from 'react';
import { connect } from 'react-redux';

import actionWrapper from 'redux-action-wrapper';
import * as contentfulActions from '../../actions/contentful';


import LargeTextBlock from '../../components/LargeTextBlock';
import WideImageBlock from '../../components/WideImageBlock';
import TwoUpImageBlock from '../../components/TwoUpImageBlock';
import TestimonialBlock from '../../components/TestimonialBlock';
import SectionTitleBlock from '../../components/SectionTitleBlock';
import TrainingSolutionsItem from '../../components/TrainingSolutionsItem';

import { Loader } from 'gw-ui';

import './privatesessions.scss';

class PrivateSessions extends Component {

	state = {
		loading : true,
		title : false,
		blocks : []
	}

	componentWillMount () {

	}

	componentDidMount () {
		const { pages, contentfulActions } = this.props;
		const page = pages.items.find( (page) => page.fields.pageSlug === 'private-sessions');
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

	className () {
		let className = 'large-text-block';
		if (this.props.cardStyle) {
			className += ' card';
			if (this.props.textColor){
				className += ' ' + this.props.textColor;
			}
		}
		if (this.props.className) {
			className += ' ' + this.props.className;
		}
		return className;
	}

	sectionBgColor (color) {
		let bgClass = 'py-margin';
		
		switch (color) {
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
		
		return bgClass;
	}

	render() {

		if ( this.state.loading ){
			return <div className="loader-wrap"> <Loader className="large" /> </div>;
		}
		console.log('page blocks::::', this.state.blocks);

		console.log('hello about');
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
					} else if (block.sys.contentType.sys.id == 'twoUpImageBlock'){
						return (
							<TwoUpImageBlock
								key={'block-'+index}
								leftImage={block.fields.leftImage}
								rightImage={block.fields.rightImage}
								bgColor={block.fields.backgroundColor}
								className="my-4"
							/>
						)
					} else if (block.sys.contentType.sys.id == "trainingSolutionsBlock"){
						return (
							<div key={'block-'+index} className={this.sectionBgColor(block.fields.backgroundColor)}>
								{block.fields.trainingSolutionItems.map((item,index)=> {
									return (
										<TrainingSolutionsItem
											key={"process-"+index}
											title={item.fields.title}
											text={item.fields.text}
											className=""
											bgColor={block.fields.backgroundColor}
										/>
									)
								})}
							</div>
						)
					} else if (block.sys.contentType.sys.id == "specialtiesAndSkills" ){
						return (
							<section key={'block-'+index} className="lola-specialties black-text py-4">
								<div className="container align-center">
									<h5 className="h1 black-text mb-4"> {block.fields.title} </h5>
									{block.fields.specialtiesItems.map((item,index)=> {
										return (
											<p key={"specialty-"+index} className="lg my-2"> {item.fields.text} </p>
										)
									})}
								</div>
							</section>
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


export default connect(mapStoreToProps, mapDispatchToProps)(PrivateSessions);