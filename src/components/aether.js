import React from 'react';
import disksDepth from '../images/aether-disk-depth.png';
import bigList from '../images/aether-big-list.png';
import breadcrumb from '../images/aether-breadcrumb.png';
import sizeSelect from '../images/aether-size-select.png';
import stack from '../images/aether-stack.png';
import bigDisk from '../images/aether-disk-big.png';

const Aether = () => {
	return (
		<section className="container aether-container">
			<div className="frame">
				<h1 className="">AetherWorks</h1>
				<img src={disksDepth} className="disks-depth" alt="disks" />
				<div className="column copy-column">
					<p className="body-copy">
						<b>AetherWorks</b> is a software research & venture development firm based in New York City. I
						was originally brought on for a full redesign of their Windows application <b>AetherStore</b>,
						though soon into that project I was offered the opportunity to redesign their remaining
						properties, including the new company site and multiple product marketing sites.
					</p>
					<p className="body-copy">
						I intially created the browser-based app with a React/Redux architecture, but it was later
						determined that a scaled down, less abstracted and mostly jQuery approach was a better fit for
						this specific project.
					</p>
					<p className="body-copy">
						AetherStore allows users to create network drives from unused hard drive space, often completely
						negating the need for external LAN storage systems.
					</p>
				</div>
				<img src={bigList} className="img-full" alt="disks" />
				<img src={breadcrumb} className="img-full" alt="disks" />
				<img src={sizeSelect} className="img-full" alt="disks" />
				<div className="row disk-row">
					<img src={stack} className="stack" alt="disks" />
					<img src={bigDisk} className="big-disk" alt="disks" />
				</div>
			</div>
		</section>
	);
};

export default Aether;
