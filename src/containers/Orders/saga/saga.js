import axios from '../../../axios-orders';
import { put } from 'redux-saga/effects';
import {
	purchaseBurgerStart,
	purchaseBurgerSuccess,
	purchaseBurgerFail,
	fetchOrdersSuccess,
	fetchOrdersFail,
	fetchOrdersStart,
} from '../actions';

export function* purchaseBurgerSaga({ orderData, token }) {
	yield put(purchaseBurgerStart());
	try {
		const response = yield axios.post('/orders.json?auth=' + token, orderData);
		yield put(purchaseBurgerSuccess(response.data.name, orderData));
	} catch (err) {
		yield put(purchaseBurgerFail(err));
	}
}

export function* fetchOrdersSaga({ token, userId }) {
	yield put(fetchOrdersStart());
	const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
	try {
		const response = yield axios.get('/orders.json' + queryParams);
		const fetchedOrders = [];
		for (let key in response.data) {
			fetchedOrders.push({
				...response.data[key],
				id: key,
			});
		}
		yield put(fetchOrdersSuccess(fetchedOrders));
	} catch (err) {
		yield put(fetchOrdersFail(err));
	}
}
