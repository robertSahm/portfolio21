import React from 'react';
import { TheContext } from '../context/provider';
import FireSVG from './fire';

const Header = () => {
	return (
		<TheContext.Consumer>
			{({ hero }) => (
				<section className="home-container">
					<div className={hero ? 'frame bg-tan' : 'frame frame-collapsed bg-tan'}>
						<h1 className={hero ? 'my-name' : 'my-name my-name-collapsed'}>
							<span>R</span>
							<span>O</span>BBY <span>S</span>AHM
						</h1>
						<h2 className={hero ? 'orange subhead' : 'orange subhead subhead-collapsed'}>
							Web Developer and Designer
						</h2>
						<FireSVG />
					</div>
				</section>
			)}
		</TheContext.Consumer>
	);
};

export default Header;
