import { takeEvery } from 'redux-saga/effects';

import { INIT_INGREDIENTS } from '../actionTypes';
import { initIngredientsSaga } from './saga';

export function* watchBurgerBuilder() {
	yield takeEvery(INIT_INGREDIENTS, initIngredientsSaga);
}
