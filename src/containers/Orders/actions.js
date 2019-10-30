import axios from '../../axios-orders';
import {
	PURCHASE_BURGER_SUCCESS,
	PURCHASE_BURGER_FAIL,
	PURCHASE_BURGER_START,
	PURCHASE_INIT,
	FETCH_ORDERS_SUCCESS,
	FETCH_ORDERS_FAIL,
	FETCH_ORDERS_START,
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

export const purchaseBurger = (orderData, token) => {
	return async dispatch => {
		dispatch(purchaseBurgerStart());
		try {
			const response = await axios.post('/orders.json?auth=' + token, orderData);
			dispatch(purchaseBurgerSuccess(response.data.name, orderData));
		} catch (err) {
			dispatch(purchaseBurgerFail(err));
		}
	};
};

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

export const fetchOrders = (token, userId) => {
	return async dispatch => {
		dispatch(fetchOrdersStart());
		const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
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
};
