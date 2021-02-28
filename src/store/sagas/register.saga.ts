import { AnyAction } from 'redux';
import { put, call } from 'redux-saga/effects';
import actions from '../actions';
import { firebaseService } from '../../firebase';
import { UserModel } from '../../models/user';
import { message } from 'antd';

export const registerSaga = function* (action: AnyAction) {
  try {
    const user = (yield call(async () => firebaseService.register(action.payload))) as UserModel;

    yield put(actions.setLoggedInUser(user));
  } catch (e) {
    yield message.error(e.message);
  }
};
