import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import './Logo.css';

const logo = ({ height }) => (
	<div className="Logo" style={{ height: height }}>
		<img src={burgerLogo} alt="My Burger" />
	</div>
);

export default logo;
