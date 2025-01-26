import './App.css';
import HomePage from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react'

function RouteApp() {
	const location = useLocation()
	return (

		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.key}>

				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<ContactPage />} />
			</Routes>
		</AnimatePresence>
	);
}

function App() {
	return (
		<div className="App">
			<Router>
				<RouteApp />
			</Router>
		</div>
	)
}

export default App;
