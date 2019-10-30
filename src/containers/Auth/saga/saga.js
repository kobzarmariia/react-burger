import axios from 'axios';
import { put, delay, all } from 'redux-saga/effects';
import {
	logoutSucceed,
	logout,
	authStart,
	authSuccess,
	checkAuthTimeout,
	authFail,
} from '../actions';

export function* logoutSaga(action) {
	yield all([
		localStorage.removeItem('token'),
		localStorage.removeItem('expirationDate'),
		localStorage.removeItem('userId'),
		put(logoutSucceed()),
	]);
}

export function* checkAuthTimeoutSaga({ expirationTime }) {
	yield delay(expirationTime * 1000);
	yield put(logout());
}

export function* authUserSaga({ email, password, isSignup }) {
	yield put(authStart());
	const authData = {
		email: email,
		password: password,
		returnSecureToken: true,
	};
	let url =
		'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAnhOrxFH3cSTA9wKnyAuf-g6KxLEzR940';
	if (!isSignup) {
		url =
			'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAnhOrxFH3cSTA9wKnyAuf-g6KxLEzR940';
	}
	try {
		const response = yield axios.post(url, authData);
		const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
		yield localStorage.setItem('token', response.data.idToken);
		yield localStorage.setItem('expirationDate', expirationDate);
		yield localStorage.setItem('userId', response.data.localId);
		yield put(authSuccess(response.data.idToken, response.data.localId));
		yield put(checkAuthTimeout(response.data.expiresIn));
	} catch (err) {
		yield put(authFail(err.response.data.error));
	}
}

export function* authCheckStateSaga(action) {
	const token = yield localStorage.getItem('token');
	if (!token) {
		yield put(logout());
	} else {
		const expirationDate = yield new Date(localStorage.getItem('expirationDate'));
		if (expirationDate <= new Date()) {
			yield put(logout());
		} else {
			const userId = yield localStorage.getItem('userId');
			yield put(authSuccess(token, userId));
			yield put(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
		}
	}
}
