import React, { useContext } from 'react';
import { ProjectContext } from '../context/provider';

const Navbar = () => {
	const { project, setProject } = useContext(ProjectContext);
	return (
		<nav className="nav-wrap" id="work-selector">
			<div className="navbar-item" onClick={() => setProject('Terrapin')}>
				Terrapin
			</div>
			<div className="navbar-item" onClick={() => setProject('Alpine')}>
				Alpine
			</div>
			<div>Selected: {project}</div>
		</nav>
	);
};

export default Navbar;
