import React from 'react';

import './DrawerToggle.css';

const drawerToggle = ({ clicked }) => (
	<div className="DrawerToggle" onClick={clicked}>
		<div></div>
		<div></div>
		<div></div>
	</div>
);

export default drawerToggle;
