import { all, takeEvery } from 'redux-saga/effects';
import actionTypes from '../../constants';
import { logoutSaga } from './logout.saga';
import { registerSaga } from './register.saga';
import { loginSaga } from './login.saga';

export const rootSaga = function* () {
  yield all([
    takeEvery(actionTypes.register, registerSaga),
    takeEvery(actionTypes.login, loginSaga),
    takeEvery(actionTypes.logout, logoutSaga),
  ]);
};
