import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { TheContext } from '../context/provider';
// import Layout from './layout';

const Navbar = () => {
	return (
		<TheContext.Consumer>
			{({ project, changeProject, header, changeHeader }) => (
				<div>
					<Link
						to="/#work-selector"
						className="navbar-item"
						activeClassName="active"
						// className={ activeTab == 'work' ? 'active navbar-item' : 'navbar-item' }
						// onClick={(e) => tabClick(e, 'work')}
					>
						Selected Work
					</Link>
					<button onClick={() => changeProject('suuuuhhhh')}>project: {project}</button>;
					<button onClick={() => changeHeader()}>header: {`${header}`}</button>;
				</div>
			)}
		</TheContext.Consumer>
	);
};

export default Navbar;
