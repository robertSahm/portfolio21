import * as React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';

const IndexPage = () => {
	return (
		<div>
			<Header />
			<Link to="/tcs">Link to TCS Page</Link>
			<Link to="/alpine">Link to Alpine Page</Link>
		</div>
	);
};

export default IndexPage;
