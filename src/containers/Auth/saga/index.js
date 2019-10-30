import { takeEvery, all } from 'redux-saga/effects';

import {
	AUTH_INITIATE_LOGOUT,
	AUTH_CHECK_TIMEOUT,
	AUTH_USER,
	AUTH_CHECK_STATE,
} from '../actionTypes';
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga } from './saga';

export function* watchAuth() {
	yield all([
		takeEvery(AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
		takeEvery(AUTH_INITIATE_LOGOUT, logoutSaga),
		takeEvery(AUTH_USER, authUserSaga),
		takeEvery(AUTH_CHECK_STATE, authCheckStateSaga),
	]);
}
