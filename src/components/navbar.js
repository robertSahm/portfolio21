import React, { useContext } from 'react';
import { myContext } from '../context/provider';
import Layout from './layout';

const Navbar = () => {
	return (
		// <Layout>
		<myContext.Consumer>
			{context => (
				<div>
					<div onClick={() => context.changeProject()}>Project: {context.project}</div>
				</div>
			)}
		</myContext.Consumer>
		// </Layout>
	);
};

export default Navbar;
