import {
	PURCHASE_INIT,
	PURCHASE_BURGER_START,
	PURCHASE_BURGER_SUCCESS,
	PURCHASE_BURGER_FAIL,
	FETCH_ORDERS_START,
	FETCH_ORDERS_SUCCESS,
	FETCH_ORDERS_FAIL,
} from './actionTypes';

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
		case PURCHASE_INIT:
			return purchaseInit(state, action);
		case PURCHASE_BURGER_START:
			return purchaseBurgerStart(state, action);
		case PURCHASE_BURGER_SUCCESS:
			return purchaseBurgerSuccess(state, action);
		case PURCHASE_BURGER_FAIL:
			return purchaseBurgerFail(state, action);
		case FETCH_ORDERS_START:
			return fetchOrdersStart(state, action);
		case FETCH_ORDERS_SUCCESS:
			return fetchOrdersSuccess(state, action);
		case FETCH_ORDERS_FAIL:
			return fetchOrdersFail(state, action);
		default:
			return state;
	}
};

export default reducer;
