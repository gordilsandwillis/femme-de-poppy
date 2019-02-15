import React, { Component } from 'react';
import { connect } from 'react-redux';

import actionWrapper from 'redux-action-wrapper';
import * as contentfulActions from '../../actions/contentful';

import LargeTextBlock from '../../components/LargeTextBlock';
import WideImageBlock from '../../components/WideImageBlock';
import TwoUpImageBlock from '../../components/TwoUpImageBlock';
import ProcessBlurb from '../../components/ProcessBlurb';
import TestimonialBlock from '../../components/TestimonialBlock';

import { Loader } from 'gw-ui';

import './home.scss';

class Home extends Component {

	state = {
		loading : true,
		title : false,
		blocks : []
	}

	componentWillMount () {

	}

	componentDidMount () {
		const { pages, contentfulActions } = this.props;
		const page = pages.items.find( (page) => page.fields.pageSlug === 'home');
		contentfulActions.fetchPage(page.sys.id);

	}

	componentWillReceiveProps (nextProps) {
		console.log('nextProps:',nextProps);
		this.setState({
			title : nextProps.page.fields.title ? nextProps.page.fields.title : false,
			blocks : nextProps.page.fields.blocks ? nextProps.page.fields.blocks : false,
			loading : false
		});
	}

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
		console.log('blocks:::')
		console.log(this.state.blocks);

		if ( this.state.loading ){
			return <div className="loader-wrap"><Loader className="large" /></div>;
		}

		return (

			<div>

				{this.state.blocks.map((block, index )=>{
					if (block.sys.contentType.sys.id == 'largeTextBlock'){

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
					} else if (block.sys.contentType.sys.id == 'processBlock'){
						console.log('found processBlock')
						return (
							<section className="py-margin bg-blue" key={'block-'+index}>
								<div className="container">
									<p className="h1 align-center my-margin"> {block.fields.title} </p>
									{block.fields.processItem.map((blurb,index)=> {
										return (
											<ProcessBlurb
												key={"process-"+index}
												title={blurb.fields.processItemTitle}
												text={blurb.fields.processItemText}
												className="my-4"
											/>
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


export default connect(mapStoreToProps, mapDispatchToProps)(Home);