import React from 'react';

import './SideDrawer.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDraw = props => {
	let attachedClasses = ['SideDrawer', 'Close'];
	if (props.open) {
		attachedClasses = ['SideDrawer', 'Open'];
	}
	return (
		<>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={attachedClasses.join(' ')}>
				<Logo height="11%" />
				<nav>
					<NavigationItems isAuthenticated={props.isAuth} />
				</nav>
			</div>
		</>
	);
};

export default sideDraw;
