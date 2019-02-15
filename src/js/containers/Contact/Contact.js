import React, { Component } from 'react';
import { connect } from 'react-redux';

import actionWrapper from 'redux-action-wrapper';
import * as contentfulActions from '../../actions/contentful';

import { Input, TextArea, Select, Button, Loader, Radio } from 'gw-ui';
import LargeTextBlock from '../../components/LargeTextBlock';

import './contact.scss';

class Contact extends Component {

	state = {
		title : false,
		blocks : [],
		name : '',
		email : '',
		address : '',
		city : '',
		state : '',
		zip : '',
		dogName : '',
		breed : '',
		age : '',
		sex : '',
		spayed : false,
		vaccinated : false,
		agressive : false,
		bitten : false,
		subject : { label : this.props.subject ? this.props.subject : 'Submissions', value : this.props.subject ? this.props.subject : 'Submissions' },
		message : ''
	}

	componentDidMount () {
		const { pages, contentfulActions } = this.props;
		const page = pages.items.find( (page) => page.fields.pageSlug === 'contact');
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

	handleInput = (event) => {
		if (event.target.name !== 'subject') {
			this.setState({ [event.target.name] : event.target.value });
		} else {
			this.setState({ [event.target.name] : { label : event.target.value, value : event.target.value } });
		}
	}

	render() {
		if ( this.state.loading ){
			return <div className="loader-wrap"><Loader className="large" /></div>;
		}

		console.log(this.state.blocks)
		let formValid = this.state.name !== '' && this.state.email !== '' && this.state.message !== '' && this.state.dogName !== '' && this.state.breed !== '' && this.state.age !== '' && this.state.sex !== '' && this.state.spayed !== false && this.state.vaccinated !== false && this.state.agressive !== false && this.state.bitten !== false ? true : false;

		let emailFormTo = this.state.subject.value === 'Investor Relations' ? 'https://formspree.io/james@haydenir.com' : 'https://formspree.io/info@dolphinentertainment.com';

		return (
			<div className="contact-form-wrapper">
				<div className="container">

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
					}
				})}
				<form action={emailFormTo} method="POST" className={"contact-form " + this.props.className}>
					<div className="grid-flex v-spaced">
						<div className="col-6">
							<Input onChange={this.handleInput} value={this.state.name} name="name" placeholder="Name" />
						</div>
						<div className="col-6">
							<Input onChange={this.handleInput} value={this.state.email} name="email" placeholder="Email" />
						</div>

						<div className="col-12">
							<Input onChange={this.handleInput} value={this.state.address} name="address" placeholder="Address" />
						</div>
						
						<div className="col-6">
							<Input onChange={this.handleInput} value={this.state.city} name="city" placeholder="City" />
						</div>

						<div className="col-2">
							<Input onChange={this.handleInput} value={this.state.state} name="state" placeholder="State" />
						</div>

						<div className="col-4">
							<Input onChange={this.handleInput} value={this.state.zip} name="zip" placeholder="Zip" />
						</div>

						<div className="col-6">
							<Input onChange={this.handleInput} value={this.state.dogName} name="dogName" placeholder="Dog's Name" />
						</div>

						<div className="col-6">
							<Input onChange={this.handleInput} value={this.state.breed} name="breed" placeholder="Breed" />
						</div>

						<div className="col-6">
							<Input onChange={this.handleInput} value={this.state.age} name="age" placeholder="Age" />
						</div>

						<div className="col-6">
							<Input onChange={this.handleInput} value={this.state.sex} name="sex" placeholder="Sex" />
						</div>

						<div className="col-6">
							<Radio 
								onChange={this.handleInput} value={this.state.spayed} name="spayed" label="Spayed / Neutered ?" />
						</div>

						<div className="col-6">
							<Radio onChange={this.handleInput} value={this.state.vaccinated} name="vaccinated" label="Vaccinated ?" />
						</div>

						<div className="col-6">
							<Radio onChange={this.handleInput} value={this.state.agressive} name="agressive" label="Agressive Habit ?" />
						</div>

						<div className="col-6">
							<Radio onChange={this.handleInput} value={this.state.bitten} name="bitten" label="Have they ever bitten a person or animal?" />
						</div>

						<div className="col-12">
							<TextArea 
								placeholder="Message" 
								onChange={this.handleInput} 
								value={this.state.message}
								name="message"
							/>
						</div>
						<div className="col-12">
							{formValid ? (
								<button className="button" type="submit">Send</button>
							) : (
								<button disabled className="button disabled" type="submit">Send</button>
							)}
						</div>
					</div>
				</form>
				</div>
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


export default connect(mapStoreToProps, mapDispatchToProps)(Contact);