import React from 'react';
import { Link } from 'gatsby';
import image1 from '../images/yes-ss-1.png';
import image2 from '../images/yes-ss-2.png';
import image3 from '../images/yes-ss-3.png';
import image4 from '../images/yes-ss-4.png';
import image5 from '../images/yes-ss-5.png';
import image6 from '../images/yes-ss-6.png';
import image7 from '../images/yes-ss-7.png';

const Yes = () => {
	return (
		<section className="container tcs-container">
			<Link to="/">Link to home</Link>
			<div className="frame">
				<h1>Yes Energy</h1>
				<div className="column copy-column">
					<p className="body-copy">
						<b>Yes Energy</b> is super cool
					</p>
					<p className="body-copy">Paragraph 2 is also super cool</p>
				</div>
				<img src={image1} className="twelve" />
				<img src={image3} className="four" />
				<img src={image2} className="six" />
				<img src={image4} className="twelve" />
				<img src={image5} className="twelve" />
				<img src={image6} className="twelve" />
				<img src={image7} className="twelve" />
			</div>
		</section>
	);
};

export default Yes;
