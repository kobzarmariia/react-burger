import React, { useEffect, Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './actions';

const Checkout = React.lazy(() => {
	return import('./containers/Checkout/Checkout');
});

const Auth = React.lazy(() => {
	return import('./containers/Auth/Auth');
});

const Orders = React.lazy(() => {
	return import('./containers/Orders/Orders');
});

const App = props => {
	useEffect(() => {
		props.onTryAutoSignUp();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	let routes = (
		<Switch>
			<Route path="/auth" exact render={props => <Auth {...props} />} />
			<Route path="/" exact component={BurgerBuilder} />
			<Redirect to="/" />
		</Switch>
	);

	if (props.isAuthenticated) {
		routes = (
			<Switch>
				<Route path="/" exact component={BurgerBuilder} />
				<Route path="/orders" exact render={props => <Orders {...props} />} />
				<Route path="/checkout" render={props => <Checkout {...props} />} />
				<Route path="/auth" exact render={props => <Auth {...props} />} />
				<Route path="/logout" component={Logout} />
				<Redirect to="/" />
			</Switch>
		);
	}

	return (
		<div>
			<Layout>
				<Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
			</Layout>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onTryAutoSignUp: () => dispatch(actions.authCheckState()),
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(App)
);
