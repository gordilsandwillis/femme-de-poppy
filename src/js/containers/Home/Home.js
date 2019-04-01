import React, { Component } from 'react';

import './home.scss';

import PageView from 'components/PageView';


// Home Images
import Lipstick1 from 'assets/images/lipstick-1.png';
import Lipstick2 from 'assets/images/lipstick-2.png';
import Lipstick3 from 'assets/images/lipstick-3.png';
import Lipstick4 from 'assets/images/lipstick-4.png';

import FemmeNeon from 'assets/images/femme-neon.png';
import FemmeGlow from 'assets/images/femme-neon-glow.png';

// Poppy Images
import PoppyTitle from 'assets/images/poppy-title.png';
import PoppyWallLeft from 'assets/images/poppy-wall-center.jpg';
import PoppyWallCenter from 'assets/images/poppy-wall-center.jpg';
import PoppyWallRight from 'assets/images/poppy-wall-right.jpg';
import PoppyCieling from 'assets/images/contact-cieling.png';
import PoppyFloor from 'assets/images/contact-cieling.png';
	// Content Images
	import PoppyFigure from 'assets/images/poppy-content-figure.png';

// About Images
import AboutTitle from 'assets/images/about-title.png';
import AboutWallCenter from 'assets/images/about-wall-left.png';
import AboutWallRight from 'assets/images/about-wall-center.png';
import AboutWallLeft from 'assets/images/about-wall-right.png';
import AboutFloor from 'assets/images/about-floor.jpg'; // the about floor is fucked
import AboutClose from 'assets/images/contact-x.png';
	// Content Images
	import AboutBox from 'assets/images/about-box.png';

// Buy Images
import BuyTitle from 'assets/images/buy-title.png';
import BuyWallLeft from 'assets/images/buy-wall-center.png';
import BuyWallCenter from 'assets/images/buy-wall-center.png';
import BuyWallRight from 'assets/images/buy-wall-center.png';
import BuyFloor from 'assets/images/buy-floor.png';
import BuyClose from 'assets/images/buy-x.png';
	// Content Images
	import BuyBarneys from 'assets/images/buy-barneys-ny.png';

// Contact Images
import ContactTitle from 'assets/images/contact-title.png';
import ContactWallLeft from 'assets/images/contact-wall-left.png';
import ContactWallCenter from 'assets/images/contact-wall-center.png';
import ContactWallRight from 'assets/images/contact-wall-right.png';
import ContactCieling from 'assets/images/contact-cieling.png';
import ContactFloor from 'assets/images/contact-cieling.png';
import ContactClose from 'assets/images/contact-x.png';
	// Content Images
	import ContactButton from 'assets/images/contact-button.png';

class Home extends Component {

	state = {
		pageView : 'home'
	}

	componentWillMount () {
	}

	componentDidMount () {
	}

	getClassName = () => {
		let className = 'page-wrap';

		if (this.state.pageView === 'about') {
			className = 'page-wrap about'
		} else if (this.state.pageView === 'buy') {
			className = 'page-wrap buy'
		} else if (this.state.pageView === 'contact') {
			className = 'page-wrap contact'
		} else if (this.state.pageView === 'poppy') {
			className = 'page-wrap poppy'
		}

		return className
	}

	returnHome = () => {
		this.setState({ pageView : 'home' })
	}

	setPageView = (page) => {
		this.setState({ pageView : page })
	}

	render() {
		return (

			<div className={this.getClassName()}>
				<div className="home-view">
					<div className="neon-wrap">
						<img className="neon" src={FemmeNeon} />
						<img className="glow" src={FemmeGlow} />
					</div>
					<a className="lipstick ls-1" onClick={() => this.setPageView('about')} title="About"><img src={Lipstick1} /></a>
					<a className="lipstick ls-2" onClick={() => this.setPageView('poppy')} title="Poppy King"><img src={Lipstick2} /></a>
					<a className="lipstick ls-3" onClick={() => this.setPageView('contact')} title="Contact"><img src={Lipstick3} /></a>
					<a className="lipstick ls-4" onClick={() => this.setPageView('buy')} title="buy"><img src={Lipstick4} /></a>
				</div>

				<PageView
					className={this.state.pageView === 'buy' ? 'buy open' : 'buy'}
					title={BuyTitle}
					ceiling={PoppyCieling}
					wallLeft={BuyWallLeft}
					wallCenter={BuyWallCenter}
					wallRight={BuyWallRight}
					floor={BuyFloor}
					closeView={this.returnHome}
					closeButton={BuyClose}
				>
					<div className="center-content">
						<div>
							<div className="grid-flex middle gutter-wide">
								<div className="col-6">
									<div className="text">
										<p className="hide-md">Femme de poppy is available for purchase exclusively at Barneys New York</p>
										<p className="show-md">Exclusively at Barneys New York</p>
									</div>
								</div>
								<div className="col-6 pt-2">
									<a className="logo image" href="https://www.barneys.com/designer/new-arrivals/femme-de-poppy/N-1109flhZ1dgswa1" target="_blank">
										<img src={BuyBarneys} />
									</a>
								</div>
							</div>
						</div>
					</div>
				</PageView>

				<PageView
					className={this.state.pageView === 'poppy' ? 'poppy open' : 'poppy'}
					title={PoppyTitle}
					ceiling={PoppyCieling}
					wallLeft={PoppyWallLeft}
					wallCenter={PoppyWallCenter}
					wallRight={PoppyWallRight}
					floor={PoppyFloor}
					closeView={this.returnHome}
				>
					<div>
						<div className="poppy-figure element-2"><img src={PoppyFigure} /></div>
						<div className="center-content text element-1">
							<div>
								<p>Poppy King has been designing lipsticks since she was 18 years old. Obssessed with perfecting the details that make the difference between a good lipstick and an amazing one, Femme de Poppy is her latest tribute to the magic of lipstick in how it transforms you inside as well as out.</p>
								<p>Poppy works and lives in New York City and finds her inspiration for lipstick creations everywhere.</p>
							</div>
						</div>
					</div>
				</PageView>

				<PageView
					className={this.state.pageView === 'about' ? 'about open' : 'about'}
					title={AboutTitle}
					ceiling={PoppyCieling}
					wallLeft={AboutWallLeft}
					wallCenter={AboutWallCenter}
					wallRight={AboutWallRight}
					floor={AboutFloor}
					closeView={this.returnHome}
					closeButton={AboutClose}
				>
					<div className="box element-2"><img src={AboutBox}/></div>
					<div className="center-content text element-1">
						<div>
							<p className="list-title">Read My Lips</p>
							<p className="list-divider">-</p>
							<p>Self adjusting lipsticks</p>
							<p>Personalized color</p>
							<p>The formula is designed to customize to your lips using body heat</p>
							<p>Watch them transform in front of your eyes </p>
							<p>Apply, wait and see!</p>
						</div>
					</div>
				</PageView>

				<PageView
					className={this.state.pageView === 'contact' ? 'contact open' : 'contact'}
					title={ContactTitle}
					ceiling={ContactCieling}
					wallLeft={ContactWallLeft}
					wallCenter={ContactWallCenter}
					wallRight={ContactWallRight}
					floor={ContactFloor}
					closeView={this.returnHome}
					closeButton={ContactClose}
				>
					<div>
						<div className="center-content form">
							{/* Hook up form to poppy@poppyking.com when going live */}
							<form action="https://formspree.io/matt@gordilsandwillis.com" method="POST">
								<div className="element-1 pb-1px">
									<div className="grid-flex gutter-tight v-spaced">
										<div className="col-6"><input type="text" name="name" placeholder="NAME"/></div>
										<div className="col-6"><input type="text" name="phone" placeholder="PHONE"/></div>
										<div className="col-12"><input type="email" name="email" placeholder="EMAIL"/></div>
										<div className="col-12">
											<select name="Inquiry type">
												<option value="general">GENERAL</option>
												<option value="general">PRESS</option>
												<option value="general">RETAIL</option>
											</select>
										</div>
										<div className="col-12"><textarea name="message" rows="4" resize="false" placeholder="MESSAGE..." /></div>
									</div>
								</div>
								<div className="element-2 mt-3 align-left">
									<button className="unstyled" type="submit"><img src={ContactButton}/></button>
								</div>
							</form>
						</div>
					</div>
				</PageView>

			</div>

		);
	}
}


export default Home;