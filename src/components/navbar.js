import React, { useContext } from 'react';
import { TheContext } from '../context/provider';
import WorkSelector from '../components/work-selector';
import About from './about';
import Contact from './contact';

const Navbar = () => {
	const { hero, changeHero, content, changeContent } = useContext(TheContext);

	const homeClick = () => {
		changeContent('home');
		!hero && changeHero();
	};

	const selectedWorkClick = () => {
		changeContent('selector');
		hero && changeHero();
	};

	const aboutClick = () => {
		changeContent('about');
		hero && changeHero();
	};

	const contactClick = () => {
		changeContent('contact');
		hero && changeHero();
	};

	return (
		<div>
			<nav className="nav-wrap" id="work-selector">
				<a className="navbar-item" onClick={() => homeClick()}>
					Home
				</a>
				<a className="navbar-item" onClick={() => selectedWorkClick()}>
					Selected Work
				</a>
				<a className="navbar-item" onClick={() => aboutClick('about')}>
					About
				</a>
				<a className="navbar-item" onClick={() => contactClick()}>
					Contact
				</a>
			</nav>
			{content === 'selector' && <WorkSelector />}
			{content === 'about' && <About />}
			{content === 'contact' && <Contact />}
		</div>
	);
};

export default Navbar;
