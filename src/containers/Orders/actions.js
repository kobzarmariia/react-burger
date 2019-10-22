import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
	return {
		type: actionTypes.PURCHASE_BURGER_SUCCESS,
		orderId: id,
		orderData: orderData,
	};
};

export const purchaseBurgerFail = error => {
	return {
		type: actionTypes.PURCHASE_BURGER_FAIL,
		error: error,
	};
};

export const purchaseBurgerStart = () => {
	return {
		type: actionTypes.PURCHASE_BURGER_START,
	};
};

export const purchaseBurger = (orderData, token) => {
	return dispatch => {
		dispatch(purchaseBurgerStart());
		postOrderData(dispatch, orderData, token);
	};
};

const postOrderData = async (dispatch, orderData, token) => {
	try {
		const response = await axios.post('/orders.json?auth=' + token, orderData);
		console.log(response.data.name);
		console.log(orderData);
		dispatch(purchaseBurgerSuccess(response.data.name, orderData));
	} catch (err) {
		console.log('ddd');
		dispatch(purchaseBurgerFail(err));
	}
};

export const purchaseInit = () => {
	return {
		type: actionTypes.PURCHASE_INIT,
	};
};

export const fetchOrdersSuccess = orders => {
	return {
		type: actionTypes.FETCH_ORDERS_SUCCESS,
		orders: orders,
	};
};

export const fetchOrdersFail = error => {
	return {
		type: actionTypes.FETCH_ORDERS_FAIL,
		error: error,
	};
};

export const fetchOrdersStart = () => {
	return {
		type: actionTypes.FETCH_ORDERS_START,
	};
};

export const fetchOrders = (token, userId) => {
	return (dispatch, getState) => {
		dispatch(fetchOrdersStart());
		const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
		getOrders(dispatch, queryParams);
	};
};

const getOrders = async (dispatch, queryParams) => {
	try {
		const response = await axios.get('/orders.json' + queryParams);
		const fetchedOrders = [];
		for (let key in response.data) {
			fetchedOrders.push({
				...response.data[key],
				id: key,
			});
		}
		dispatch(fetchOrdersSuccess(fetchedOrders));
	} catch (err) {
		dispatch(fetchOrdersFail(err));
	}
};