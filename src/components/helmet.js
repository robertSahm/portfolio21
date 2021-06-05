import * as React from 'react';
import HelmetBase from 'react-helmet';

const Helmet = ({ title, description }) => {
	return (
		<HelmetBase>
			<html lang="en" />
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" charset="UTF-8" />
			<link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
			<link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
			<link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />
			<link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#5bbad5" />
			<meta name="theme-color" content="#fff" />
			<meta property="og:type" content="business.business" />
			<meta property="og:title" content={title} />
			<meta property="og:url" content="/" />
			<meta property="og:image" content="/img/og-image.jpg" />
		</HelmetBase>
	);
};

export default Helmet;
