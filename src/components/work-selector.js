import React, { useContext } from 'react';
import { TheContext } from '../context/provider';
import Yes from './yes';
import TCS from './tcs';
import yesLogo from '../images/yes-logo.png';
import terrapinLogo from '../images/terrapin-logo-t.png';
import aetherDisk from '../images/aether-disk-big.png';
import bulb from '../images/lucera_bulb_small.svg';
import alpine from '../images/alpine-small.png';

const WorkSelector = () => {
	return (
		<section className="works-wrap">
			<div className="row link-box-row">
				<div className="link-box yes-box">
					<div className="logo-wrap">
						<img src={yesLogo} alt="logo" />
					</div>
					<h3>Yes Energy</h3>
					<a className={'link-wrap'} />
				</div>

				<div className="link-box tcs-box">
					<div className="logo-wrap">
						<img src={terrapinLogo} alt="logo" />
					</div>
					<h3>Terrapin</h3>
					<a className={'link-wrap'} />
				</div>

				<div className="link-box aether-box">
					<div className="logo-wrap">
						<img src={aetherDisk} alt="logo" />
					</div>
					<h3>AetherWorks</h3>
					<a className="link-wrap" />
				</div>

				<div className="link-box lucera-box">
					<div className="logo-wrap">
						<img src={bulb} alt="logo" />
					</div>
					<h3>Lucera</h3>
					<a className="link-wrap" />
				</div>

				<div className="link-box alpine-box">
					<div className="logo-wrap">
						<img src={alpine} className="alpine" alt="logo" />
					</div>
					<h3>Alpine Labs</h3>
					<a className="link-wrap" />
				</div>
			</div>
			<Yes />
			{/* <TCS /> */}
		</section>
	);
};

export default WorkSelector;
