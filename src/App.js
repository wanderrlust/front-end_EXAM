import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import UserList from './components/UserList';
import './reset.css';
import './styles.css';

function App() {
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/userList" element={<UserList />} />
					<Route path="/user/:id" element={<User />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
