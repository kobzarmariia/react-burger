import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ({ isAuthenticated }) => (
	<ul className="NavigationItems">
		<NavigationItem link="/" active>
			Burger Builder
		</NavigationItem>
		{isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
		{!isAuthenticated ? (
			<NavigationItem link="/auth">Sign Up</NavigationItem>
		) : (
			<NavigationItem link="/logout">Log Out</NavigationItem>
		)}
	</ul>
);

export default navigationItems;
