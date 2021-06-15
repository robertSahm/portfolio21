import React from 'react';
import { Link } from 'gatsby';
import image1 from '../images/yes-ss-1.png';
import image2 from '../images/yes-ss-2.png';
import image3 from '../images/yes-ss-3.png';
import image4 from '../images/yes-ss-4.png';
import image5 from '../images/yes-ss-5.png';
import image6 from '../images/yes-ss-6.png';
import image7 from '../images/yes-ss-7.png';
import TopLink from './top-link';

const Yes = () => {
	return (
		<section className="container yes-container">
			<div className="frame">
				<h1>Yes Energy</h1>
				<div className="column copy-column">
					<p className="body-copy">
						<b>Yes Energy</b> is the leader in energy market data for the energy industry and nodal power
						traders. Yes Energy makes software for people who trade energy as a commodity, specializing in
						data visualization and big data management.
					</p>
					<p className="body-copy">
						Yes Energy revolutionized power market data visualization. They are the industry leader in
						providing power market participants with tools to support their daily trading operations. Yes
						Energy collects and manages thousands of real-time and historical power market data series
						including (but not limited to) ISO/RTO data, LMP prices, FTR auction results, transmission and
						generation outages, real-time generation and flow data, and load and weather forecasts.
					</p>
				</div>
				<div className="yes-img-wrap">
					<div className="row">
						<img src={image1} className="image1 eleven center" />
					</div>
					<div className="double-row eleven center">
						<img src={image3} className="image2" />
						<img src={image2} className="image3" />
					</div>

					<div className="row">
						<img src={image4} className="eleven center" />
					</div>
					<div>
						<img src={image5} className="eleven center" />
					</div>
					<div className="row">
						<img src={image6} className="eleven center" />
					</div>
					<div className="row">
						<img src={image7} className="eleven center" />
					</div>
				</div>
			</div>
			<TopLink />
		</section>
	);
};

export default Yes;
