import React from 'react';

import './SideDrawer.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDraw = ({ open, closed, isAuth }) => {
	let attachedClasses = ['SideDrawer', 'Close'];
	if (open) {
		attachedClasses = ['SideDrawer', 'Open'];
	}
	return (
		<>
			<Backdrop show={open} clicked={closed} />
			<div className={attachedClasses.join(' ')} onClick={closed}>
				<Logo height="11%" />
				<nav>
					<NavigationItems isAuthenticated={isAuth} />
				</nav>
			</div>
		</>
	);
};

export default sideDraw;
