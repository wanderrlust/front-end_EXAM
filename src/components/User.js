import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

function User() {
	const { id } = useParams();
	const location = useLocation();
	const name = location.state?.name || "Ім'я невідоме";

	return (
		<div className="page">
			<div>
				<h1>Сторінка користувача</h1>
				<p>ID користувача: {id}</p>
				<p>Ім'я користувача: {name}</p>
			</div>

			<ul className="home-links">
				<li className="home-link">
					<Link to="/userList">
						Перейти на сторінку зі списком користувачів
					</Link>
				</li>
				<li className="home-link">
					<Link to="/">Повернутися на головну сторінку</Link>
				</li>
			</ul>
		</div>
	);
}

export default User;
