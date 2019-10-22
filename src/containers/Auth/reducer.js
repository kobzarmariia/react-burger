import * as actionTypes from './actionTypes';

const initialState = {
	token: null,
	userId: null,
	error: null,
	loading: false,
	authRedirectPath: '/',
};

const authStart = (state = initialState, action) => {
	return {
		...state,
		error: null,
		loading: true,
	};
};

const authSuccess = (state, { idToken, userId }) => {
	return {
		...state,
		token: idToken,
		userId: userId,
		error: null,
		loading: false,
	};
};

const authFail = (state, { error }) => {
	return {
		...state,
		error: error,
		loading: false,
	};
};

const authLogout = (state, action) => {
	return {
		...state,
		token: null,
		userId: null,
	};
};

const setAuthRedirectPath = (state, { path }) => {
	return {
		...state,
		authRedirectPath: path,
	};
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH_START:
			return authStart(state, action);
		case actionTypes.AUTH_SUCCESS:
			return authSuccess(state, action);
		case actionTypes.AUTH_FAIL:
			return authFail(state, action);
		case actionTypes.AUTH_LOGOUT:
			return authLogout(state, action);
		case actionTypes.SET_AUTH_REDIRECT_PATH:
			return setAuthRedirectPath(state, action);
		default:
			return state;
	}
};

export default reducer;
