import * as actionTypes from '../../store/actions/actionTypes';
import axios from '../../axios-orders';

export const addIngredient = name => {
	return {
		type: actionTypes.ADD_INGREDIENT,
		ingredientName: name,
	};
};

export const removeIngredient = name => {
	return {
		type: actionTypes.REMOVE_INGREDIENT,
		ingredientName: name,
	};
};

export const setIngredients = ingredients => {
	return {
		type: actionTypes.SET_INGREDIENTS,
		ingredients: ingredients,
	};
};

export const fetchIngredientsFailed = () => {
	return {
		type: actionTypes.FETCH_INGREDIENTS_FAILED,
	};
};

export const initIngredients = () => {
	return dispatch => {
		getIngredients(dispatch);
	};
};

const getIngredients = async dispatch => {
	try {
		const response = await axios.get('https://react-burger-a6819.firebaseio.com/ingredients.json');
		dispatch(setIngredients(response.data));
	} catch (error) {
		dispatch(fetchIngredientsFailed());
	}
};
