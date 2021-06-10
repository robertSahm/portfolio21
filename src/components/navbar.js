import React from 'react';
import { Link } from 'gatsby';
import { TheContext } from '../context/provider';

const Navbar = () => {
	return (
		<TheContext.Consumer>
			{({ project, changeProject, hero, changeHero }) => (
				<div>
					<a className="navbar-item" onClick={() => changeHero()}>
						Selected Work
					</a>
					{/* <button onClick={() => changeProject('suuuuhhhh')}>project: {project}</button>;
					<button onClick={() => changeHero()}>hero: {`${hero}`}</button>; */}
				</div>
			)}
		</TheContext.Consumer>
	);
};

export default Navbar;
