import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
	render() {
		return (
			<header>
				<nav>
					<Link to="/">Home</Link> |
					<Link to="/about">About</Link> |
					<Link to="/asdf">Not Found</Link>
				</nav>
			</header>
		);
	}
}

export default Navigation;
