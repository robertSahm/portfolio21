import React from 'react';
import { Link } from 'gatsby';
import { TheContext } from '../context/provider';

const Navbar = () => {
	return (
		<TheContext.Consumer>
			{({ project, changeProject, hero, changeHero }) => (
				<div>
					<Link to="/#work-selector" className="navbar-item">
						Selected Work
					</Link>
					<button onClick={() => changeProject('suuuuhhhh')}>project: {project}</button>;
					<button onClick={() => changeHero()}>hero: {`${hero}`}</button>;
				</div>
			)}
		</TheContext.Consumer>
	);
};

export default Navbar;
