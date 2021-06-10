import React, { useContext } from 'react';
import Helmet from './helmet';
import { makePageTitle } from './helpers';
import '../styles/all.sass';
import '@fontsource/eb-garamond/700.css';
import '@fontsource/eb-garamond/400.css';

const Layout = ({ children }) => {
	return (
		<main>
			<Helmet title={makePageTitle(children)} />
			{children}
		</main>
	);
};

export default Layout;
