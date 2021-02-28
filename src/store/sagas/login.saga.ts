import { AnyAction } from 'redux';
import { put, call } from 'redux-saga/effects';
import actions from '../actions';
import { firebaseService } from '../../firebase';
import { UserModel } from '../../models/user';

export const loginSaga = function* (action: AnyAction) {
  const user = (yield call(async () => firebaseService.login(action.payload))) as UserModel;

  yield put(actions.setLoggedInUser(user));
};
