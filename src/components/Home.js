import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="page">
			<div>
				<h1>Головна сторінка</h1>
				<p>Hello world!</p>
			</div>
			<ul className="home-links">
				<li className="home-link">
					<Link to="/userList">
						Перейти на сторінку зі списком користувачів
					</Link>
				</li>
				<li className="home-link">
					<Link to="/about">Перейти на сторінку "Про нас"</Link>
				</li>
			</ul>
		</div>
	);
};

export default Home;
