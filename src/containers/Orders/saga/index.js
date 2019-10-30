import { takeEvery } from 'redux-saga/effects';

import { PURCHASE_BURGER, FETCH_ORDERS } from '../actionTypes';
import { purchaseBurgerSaga, fetchOrdersSaga } from './saga';

export function* watchOrders() {
	yield takeEvery(PURCHASE_BURGER, purchaseBurgerSaga);
	yield takeEvery(FETCH_ORDERS, fetchOrdersSaga);
}
