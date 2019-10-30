import React, { useState } from 'react';
import { connect } from 'react-redux';

import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = ({ isAuthenticated, children }) => {
	const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

	const sideDrawerClosedHandler = () => {
		setSideDrawerIsVisible(false);
	};

	const sideDrawerToggleHandler = () => {
		setSideDrawerIsVisible(!sideDrawerIsVisible);
	};

	return (
		<>
			<Toolbar isAuth={isAuthenticated} drawerToggleClicked={sideDrawerToggleHandler} />
			<SideDrawer
				isAuth={isAuthenticated}
				open={sideDrawerIsVisible}
				closed={sideDrawerClosedHandler}
			/>
			<main className="content">{children}</main>
		</>
	);
};

const mapStateToProps = ({ auth }) => ({
	isAuthenticated: auth.token !== null,
});

export default connect(mapStateToProps)(Layout);
