import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.css';

const navigationItem = ({ link, children }) => (
	<li className="NavigationItem">
		<NavLink to={link} exact activeClassName="active">
			{children}
		</NavLink>
	</li>
);

export default navigationItem;
