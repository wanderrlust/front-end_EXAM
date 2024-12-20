import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div className="page">
			<div>
				<h1>Про нас</h1>
				<p>Це сторінка про нас.</p>
			</div>
			
			<ul className="home-links">
				<li className="home-link">
					<Link to="/">Повернутися на головну сторінку</Link>
				</li>
			</ul>
		</div>
	);
};

export default About;
