import { call, put } from 'redux-saga/effects';
import actions from '../actions';
import { firebaseService } from '../../firebase';

export const logoutSaga = function* () {
  yield call(async () => firebaseService.logout());

  yield put(actions.setLoggedInUser(null));
};
