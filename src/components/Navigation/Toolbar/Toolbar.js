import React from 'react';

import './Toolbar.css';
import Logo from '../../Logo/Logo';

import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = ({ drawerToggleClicked, isAuth }) => (
	<header className="Toolbar">
		<DrawerToggle clicked={drawerToggleClicked} />
		<Logo height="80%" />
		<nav className="DesktopOnly">
			<NavigationItems isAuthenticated={isAuth} />
		</nav>
	</header>
);

export default toolbar;
