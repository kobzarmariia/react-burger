import {
	ADD_INGREDIENT,
	REMOVE_INGREDIENT,
	SET_INGREDIENTS,
	FETCH_INGREDIENTS_FAILED,
} from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = name => ({
	type: ADD_INGREDIENT,
	ingredientName: name,
});

export const removeIngredient = name => ({
	type: REMOVE_INGREDIENT,
	ingredientName: name,
});

export const setIngredients = ingredients => ({
	type: SET_INGREDIENTS,
	ingredients: ingredients,
});

export const fetchIngredientsFailed = () => ({
	type: FETCH_INGREDIENTS_FAILED,
});

export const initIngredients = () => {
	return async dispatch => {
		try {
			const response = await axios.get(
				'https://react-burger-a6819.firebaseio.com/ingredients.json'
			);
			dispatch(setIngredients(response.data));
		} catch (error) {
			dispatch(fetchIngredientsFailed());
		}
	};
};
