import React from 'react';
import { Link } from 'gatsby';

const TopLink = () => {
	return (
		<h3>
			<Link to="/" className="link-to-top">
				Top &#8593;
			</Link>
		</h3>
	);
};

export default TopLink;
