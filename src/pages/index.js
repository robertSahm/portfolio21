import * as React from 'react';
import { Link } from 'gatsby';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import { TheContext } from '../context/provider';
import Layout from '../components/layout';
import WorkSelector from './work-selector';

const IndexPage = () => (
	<div>
		<Hero />
		<Navbar />
		<WorkSelector />
	</div>
);

export default IndexPage;
