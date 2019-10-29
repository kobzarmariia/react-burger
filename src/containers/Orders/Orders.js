import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import { fetchOrders } from './actions';

const Orders = props => {
	useEffect(() => {
		props.onFetchOrders(props.token, props.userId);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	let orders = <Spinner />;
	if (!props.loading) {
		orders = props.orders.map(order => (
			<Order key={order.id} ingredients={order.ingredients} price={order.price} />
		));
	}
	return <div>{orders}</div>;
};

const mapStateToProps = state => ({
	orders: state.order.orders,
	loading: state.order.loading,
	token: state.auth.token,
	userId: state.auth.userId,
});

const mapDispatchToProps = dispatch => ({
	onFetchOrders: (token, userId) => dispatch(fetchOrders(token, userId)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withErrorHandler(Orders, axios));
