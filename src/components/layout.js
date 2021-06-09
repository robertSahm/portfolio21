import React from 'react';
import Helmet from './helmet';
import { makePageTitle } from './helpers';
import { myContext } from '../context/provider';
import '../styles/all.sass';
import '@fontsource/eb-garamond/700.css';
import '@fontsource/eb-garamond/400.css';

const Layout = ({ children }) => {
	return (
		<div>
			{/* <myContext.Consumer>
				{context => (
					<main>
						<Helmet title={makePageTitle(children)} />
						<div>hiiii</div>
					</main>
				)}
			</myContext.Consumer> */}
			{children}
		</div>
	);
};

export default Layout;
