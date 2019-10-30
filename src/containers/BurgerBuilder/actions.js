import {
	INIT_INGREDIENTS,
	ADD_INGREDIENT,
	REMOVE_INGREDIENT,
	SET_INGREDIENTS,
	FETCH_INGREDIENTS_FAILED,
} from './actionTypes';

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

export const initIngredients = () => ({
	type: INIT_INGREDIENTS,
});
