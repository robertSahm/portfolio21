import React from 'react';
import header from '../images/alpine_ss_2.png';
import steps from '../images/alpine_ss_3.png';
import contact from '../images/alpine_ss_4.png';
import work from '../images/alpine_ss_5.png';
import login from '../images/alpine_ss_6.png';
import snowmobile from '../images/alpine_ss_7.png';

const Alpine = () => {
	return (
		<section className="container alpine-container">
			<div className="frame">
				<h1>Alpine Labs</h1>
				<img src={header} className="alpine-header-img" alt="alpine" />
				<div className="column copy-column">
					<p className="body-copy">
						<b>Alpine Labs</b> is a boutique video production company based out of West Hollywood, CA. They
						needed a solution to host and serve their own videos while adhering to a strict design
						aesthetic. My responsibilities included implementing static concept art into animated,
						interactive satisfaction using JS, HTML, SCSS and Ruby.
					</p>
				</div>
				<img src={steps} className="alpine-full-img" alt="alpine" />
				<img src={contact} className="alpine-full-img" alt="alpine" />
				<img src={work} className="alpine-full-img" alt="alpine" />
				<div className="img-row bottom-row">
					<img src={login} className="login" alt="login" />
					<img src={snowmobile} className="snowmobile" alt="snowmobile" />
				</div>
			</div>
		</section>
	);
};

export default Alpine;
