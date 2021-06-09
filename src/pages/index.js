import * as React from 'react';
import { Link } from 'gatsby';
import { myContext } from '../context/provider';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Layout from '../components/layout';

const IndexPage = () => {
	return (
		<myContext.Consumer>
			{context => (
				<main>
					<Header />
					<Navbar />
					<Link to="/tcs">Link to TCS Page</Link>
					<Link to="/alpine">Link to Alpine Page</Link>
				</main>
			)}
		</myContext.Consumer>
	);
};

export default IndexPage;
