import React, { useState, useEffect } from 'react';
import { TheContext } from '../context/provider';
import terrapinLogo from '../images/terrapin-logo-t.png';

const WorkSelector = () => {
	return (
		<TheContext.Consumer>
			{({ project, changeProject, hero, changeHero }) => (
				<section className="works-wrap">
					<div className="row link-box-row">
						<div className="link-box tcs-box">
							<div className="logo-wrap">
								<img src={terrapinLogo} alt="logo" />
							</div>
							<h3>Terrapin</h3>
							<a className={'link-wrap'} onClick={() => changeHero()} />
						</div>
					</div>
				</section>
			)}
		</TheContext.Consumer>
	);
};

export default WorkSelector;
