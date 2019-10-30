import {
	PURCHASE_BURGER,
	PURCHASE_BURGER_SUCCESS,
	PURCHASE_BURGER_FAIL,
	PURCHASE_BURGER_START,
	PURCHASE_INIT,
	FETCH_ORDERS_SUCCESS,
	FETCH_ORDERS_FAIL,
	FETCH_ORDERS_START,
	FETCH_ORDERS,
} from './actionTypes';

export const purchaseBurgerSuccess = (id, orderData) => ({
	type: PURCHASE_BURGER_SUCCESS,
	orderId: id,
	orderData: orderData,
});

export const purchaseBurgerFail = error => ({
	type: PURCHASE_BURGER_FAIL,
	error: error,
});

export const purchaseBurgerStart = () => ({
	type: PURCHASE_BURGER_START,
});

export const purchaseBurger = (orderData, token) => ({
	type: PURCHASE_BURGER,
	orderData: orderData,
	token: token,
});

export const purchaseInit = () => ({
	type: PURCHASE_INIT,
});

export const fetchOrdersSuccess = orders => ({
	type: FETCH_ORDERS_SUCCESS,
	orders: orders,
});

export const fetchOrdersFail = error => ({
	type: FETCH_ORDERS_FAIL,
	error: error,
});

export const fetchOrdersStart = () => ({
	type: FETCH_ORDERS_START,
});

export const fetchOrders = (token, userId) => ({
	type: FETCH_ORDERS,
	token: token,
	userId: userId,
});
