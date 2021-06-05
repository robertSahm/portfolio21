import * as React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';

const IndexPage = () => {
	return (
		<div>
			<Header />
			<Link to="/tcs">Link to TCS Page</Link>
		</div>
	);
};

export default IndexPage;
