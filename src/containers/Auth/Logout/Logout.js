import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';

const Logout = props => {
	useEffect(() => {
		props.onLogout();
		// eslint-disable-next-line
	}, []);

	return <Redirect to="/" />;
};

const mapDispatchToProps = dispatch => ({
	onLogout: () => dispatch(actions.logout()),
});

export default connect(
	null,
	mapDispatchToProps
)(Logout);
