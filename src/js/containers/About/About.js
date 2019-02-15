import React, { Component } from 'react';
import { connect } from 'react-redux';

import actionWrapper from 'redux-action-wrapper';
import * as contentfulActions from '../../actions/contentful';

import LargeTextBlock from '../../components/LargeTextBlock';
import WideImageBlock from '../../components/WideImageBlock';
import TestimonialBlock from '../../components/TestimonialBlock';
import SectionTitleBlock from '../../components/SectionTitleBlock';

import { Loader } from 'gw-ui';

// import './About.scss';

class About extends Component {

	state = {
		loading : true,
		title : false,
		blocks : []
	}

	componentWillMount () {

	}

	componentDidMount () {
		const { pages, contentfulActions } = this.props;
		const page = pages.items.find( (page) => page.fields.pageSlug === 'about');
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
			return <div className="loader-wrap"><Loader className="large" /></div>;
		}
		// console.log('page blocks::::', this.state.blocks);
		return (
			<div>
				{this.state.blocks.map((block, index )=>{
					if (block.sys.contentType.sys.id == "largeTextBlock"){
						return (
							<LargeTextBlock
								key={'block-'+index}
								title={ block.fields.title ? block.fields.title: false}
								text={block.fields.text}
								buttons=""
								cardStyle={block.fields.cardStyle}
								bgColor={block.fields.backgroundColor}
								textColor={block.fields.textColor}
							/>
						)
					} else if (block.sys.contentType.sys.id == "wideImageBlock") {
						return (
							<WideImageBlock
								key={'block-'+index}
								imageSrc={"http:"+block.fields.image.fields.file.url}
								className="my-2"
								bgClass="bg-grey pt-1 pb-4"
							/>
						)
					} else if (block.sys.contentType.sys.id == "sectionTitleBlock"){
						return (
							<SectionTitleBlock
								key={'block-'+index}
								title={block.fields.sectionTitle}
								bgColor={block.fields.backgroundColor}
								textColor={block.fields.textColor}
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


export default connect(mapStoreToProps, mapDispatchToProps)(About);