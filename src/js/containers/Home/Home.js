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
import PoppyWallLeft from 'assets/images/poppy-wall-center.png';
import PoppyWallCenter from 'assets/images/poppy-wall-center.png';
import PoppyWallRight from 'assets/images/poppy-wall-right.png';
import PoppyCieling from 'assets/images/contact-cieling.png';
import PoppyFloor from 'assets/images/contact-cieling.png';
	// Content Images
	import PoppyFigure from 'assets/images/poppy-content-figure.png';

// About Images
import AboutTitle from 'assets/images/about-title.png';
// import AboutWallLeft from 'assets/images/about-wall-left.png';
// import AboutWallCenter from 'assets/images/about-wall-center.png';
import AboutWallCenter from 'assets/images/about-wall-left.png';
import AboutWallRight from 'assets/images/about-wall-center.png';
import AboutWallLeft from 'assets/images/about-wall-right.png';
import AboutFloor from 'assets/images/about-floor.png'; // the about floor is fucked
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
					<a className="lipstick ls-2" onClick={() => this.setPageView('buy')} title="Buy"><img src={Lipstick2} /></a>
					<a className="lipstick ls-3" onClick={() => this.setPageView('contact')} title="Contact"><img src={Lipstick3} /></a>
					<a className="lipstick ls-4" onClick={() => this.setPageView('poppy')} title="Poppy King"><img src={Lipstick4} /></a>
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
							<div className="grid-flex middle">
								<div className="col-6">
									<div className="text">
										<p>Femme de poppy is available for purchase exclusively at Barneys New York</p>
									</div>
								</div>
								<div className="col-6">
									<div className="image">
										<img src={BuyBarneys} />
									</div>
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
								<p>Since the age of eighteen, Poppys vision of lipstick as artifact and her understanding of its power to transform have led her to design intelligent, glamorous, and surprising lipsticks as nuanced in formula as they are in look and feel.</p>
								<p>Now, The woman behind the cult hits Medieval, Frog Prince, and Hello Sailor is taking her obsession further, with her first entirely self-financed, unfiltered brand “Femme de Poppy.” </p>
								<p className="mb-0">Poppy xo</p>
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
							<p>Welcome to Femme de Poppy, Poppy King’s latest specialty lipstick brand. inspired by the archetypal figures Joan of Arc and Helen of Troy, Poppy continues with her quest to make lipstick into the intelligent, powerful, wearable, feminist product she has always imagined it to be.</p>
							<p>Available exclusively at Barneys, Femme de Poppy will be creating a new, limited-edition lipstick every month—each one a curated experience and a story unto itself. Designed with Unusual finishes, textures, and effects, the launch collection features three matte formulas that work with your lips to blossom into their full color potential and to provide a truely luxurious feel. Apply, wait, and watch your own body heat transform the lipstick into a luscious, never-before-seen variation of matte.</p>
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
							<form action="https://formspree.io/matt@gordilsandwillis.com" method="POST">
								<div className="element-1 pb-1px">
									<div className="grid-flex gutter-tight v-spaced">
										<div className="col-6"><input type="text" name="name" placeholder="NAME"/></div>
										<div className="col-6"><input type="text" name="phone" placeholder="PHONE"/></div>
										<div className="col-12"><input type="email" name="email" placeholder="EMAIL"/></div>
										<div className="col-12"><input type="text" name="Inquiry type" placeholder="INQUIRY TYPE"/></div>
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