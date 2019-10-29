import {
	ADD_INGREDIENT,
	REMOVE_INGREDIENT,
	SET_INGREDIENTS,
	FETCH_INGREDIENTS_FAILED,
} from './actionTypes';

const initialState = {
	ingredients: null,
	totalPrice: 4,
	error: false,
	building: false,
};

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7,
};

const addIngredient = (state, { ingredientName }) => {
	return {
		...state,
		ingredients: {
			...state.ingredients,
			[ingredientName]: state.ingredients[ingredientName] + 1,
		},
		totalPrice: state.totalPrice + INGREDIENT_PRICES[ingredientName],
		building: true,
	};
};

const removeIngredient = (state, { ingredientName }) => {
	return {
		...state,
		ingredients: {
			...state.ingredients,
			[ingredientName]: state.ingredients[ingredientName] - 1,
		},
		totalPrice: state.totalPrice - INGREDIENT_PRICES[ingredientName],
		building: true,
	};
};

const setIngredients = (state, { ingredients: { salad, bacon, cheese, meat } }) => {
	return {
		...state,
		ingredients: {
			salad: salad,
			bacon: bacon,
			cheese: cheese,
			meat: meat,
		},
		totalPrice: 4,
		error: false,
		building: false,
	};
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_INGREDIENT:
			return addIngredient(state, action);
		case REMOVE_INGREDIENT:
			return removeIngredient(state, action);
		case SET_INGREDIENTS:
			return setIngredients(state, action);
		case FETCH_INGREDIENTS_FAILED:
			return {
				...state,
				error: true,
			};
		default:
			return state;
	}
};

export default reducer;
