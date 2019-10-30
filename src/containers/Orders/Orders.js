import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import { fetchOrders } from './actions';

const Orders = ({ orders, loading, onFetchOrders, token, userId }) => {
	useEffect(() => {
		onFetchOrders(token, userId);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	let receivedOrders = <Spinner />;
	if (!loading) {
		receivedOrders = orders.map(order => (
			<Order key={order.id} ingredients={order.ingredients} price={order.price} />
		));
	}
	return <div>{receivedOrders}</div>;
};

const mapStateToProps = ({ order, auth }) => ({
	orders: order.orders,
	loading: order.loading,
	token: auth.token,
	userId: auth.userId,
});

const mapDispatchToProps = dispatch => ({
	onFetchOrders: (token, userId) => dispatch(fetchOrders(token, userId)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withErrorHandler(Orders, axios));
