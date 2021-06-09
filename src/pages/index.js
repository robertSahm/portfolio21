import * as React from 'react';
import { Link } from 'gatsby';
// import { myContext } from '../context/provider';
import Header from '../components/header';
import Navbar from '../components/navbar';

const IndexPage = () => {
	return (
		<div>
			<Header />
			<Navbar />
			<Link to="/tcs">Link to TCS Page</Link>
			<Link to="/alpine">Link to Alpine Page</Link>
		</div>
	);
};

export default IndexPage;
