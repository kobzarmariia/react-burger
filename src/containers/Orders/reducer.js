import * as actionTypes from './actionTypes';

const initialState = {
	orders: [],
	loading: false,
	purchased: false,
};

const purchaseInit = (state, action) => {
	return {
		...state,
		purchased: false,
	};
};

const purchaseBurgerSuccess = (state, { orderData, orderId }) => {
	const newOrder = { ...orderData, id: orderId };
	return {
		...state,
		loading: false,
		purchased: true,
		orders: [...state.orders, newOrder],
	};
};

const purchaseBurgerStart = (state, action) => {
	return {
		...state,
		loading: true,
	};
};

const purchaseBurgerFail = (state, action) => {
	return {
		...state,
		loading: false,
	};
};

const fetchOrdersStart = (state, action) => {
	return {
		...state,
		loading: true,
	};
};

const fetchOrdersSuccess = (state, { orders }) => {
	return {
		...state,
		orders: orders,
		loading: false,
	};
};

const fetchOrdersFail = (state, action) => {
	return {
		...state,
		loading: false,
	};
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.PURCHASE_INIT:
			return purchaseInit(state, action);
		case actionTypes.PURCHASE_BURGER_START:
			return purchaseBurgerStart(state, action);
		case actionTypes.PURCHASE_BURGER_SUCCESS:
			return purchaseBurgerSuccess(state, action);
		case actionTypes.PURCHASE_BURGER_FAIL:
			return purchaseBurgerFail(state, action);
		case actionTypes.FETCH_ORDERS_START:
			return fetchOrdersStart(state, action);
		case actionTypes.FETCH_ORDERS_SUCCESS:
			return fetchOrdersSuccess(state, action);
		case actionTypes.FETCH_ORDERS_FAIL:
			return fetchOrdersFail(state, action);
		default:
			return state;
	}
};

export default reducer;
