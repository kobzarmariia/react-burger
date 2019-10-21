import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
	<ul className="NavigationItems">
		<NavigationItem link="/" active>
			Burger Builder
		</NavigationItem>
		{props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
		{!props.isAuthenticated ? (
			<NavigationItem link="/auth">Sign Up</NavigationItem>
		) : (
			<NavigationItem link="/logout">Log Out</NavigationItem>
		)}
	</ul>
);

export default navigationItems;
