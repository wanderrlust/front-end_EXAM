import React from 'react';
import { Link } from 'react-router-dom';

const list = [
	{
		id: 1,
		name: 'Ivan',
	},
	{
		id: 2,
		name: 'Pavlo',
	},
	{
		id: 3,
		name: 'Maksim',
	},
	{
		id: 4,
		name: 'Oleg',
	},
];

const UserList = () => {
	return (
		<div className="page">
			<div>
				<h1>Список користувачів</h1>
				<p>Це сторінка списку користувачів.</p>
				<ul className="userList-list">
					{list.map((item) => (
						<li key={item.id} className="userList-item">
							<Link
								to={`/user/${item.id}`}
								state={{ name: item.name }}
							>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</div>

			<ul className="home-links">
				<li className="home-link">
					<Link to="/">Повернутися на головну сторінку</Link>
				</li>
			</ul>
		</div>
	);
};

export default UserList;
