import * as React from 'react';
import { Link } from 'gatsby';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import { TheContext } from '../context/provider';
import Layout from '../components/layout';

const IndexPage = () => (
	<div>
		<Hero />
		<Navbar />
	</div>
);

export default IndexPage;
