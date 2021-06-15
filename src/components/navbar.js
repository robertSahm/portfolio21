import React, { useContext } from 'react';
import { TheContext } from '../context/provider';

const Navbar = () => {
	const { hero, changeHero } = useContext(TheContext);
	const showWorkSelector = () => {
		// get in here
	};

	const selectedWorkClick = () => {
		hero && changeHero();
	};

	return (
		<nav className="nav-wrap" id="work-selector">
			<a className="navbar-item" onClick={() => !hero && changeHero()}>
				Home
			</a>
			<a className="navbar-item" onClick={() => selectedWorkClick()}>
				Selected Work
			</a>
			<a className="navbar-item" onClick={() => hero && changeHero()}>
				About
			</a>
			<a className="navbar-item" onClick={() => hero && changeHero()}>
				Contact
			</a>
		</nav>
	);
};

export default Navbar;
