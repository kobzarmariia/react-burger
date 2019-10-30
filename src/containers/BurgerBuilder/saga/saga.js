import { put } from 'redux-saga/effects';
import { setIngredients, fetchIngredientsFailed } from '../actions';
import axios from '../../../axios-orders';

export function* initIngredientsSaga(action) {
	try {
		const response = yield axios.get('https://react-burger-a6819.firebaseio.com/ingredients.json');
		yield put(setIngredients(response.data));
	} catch (error) {
		yield put(fetchIngredientsFailed());
	}
}
