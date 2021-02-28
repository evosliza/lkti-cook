import { Credentials } from '../../firebase/auth/login';
import actionTypes from '../action-types';
import { UserModel } from '../../models/user';
import { AnyAction } from 'redux';

export const register = (user: UserModel): AnyAction => {
  return {
    type: actionTypes.register,
    payload: user,
  };
};

export const login = (credentials: Credentials): AnyAction => {
  return {
    type: actionTypes.login,
    payload: credentials,
  };
};

export const setLoggedInUser = (userData: UserModel | null): AnyAction => {
  return {
    type: actionTypes.setLoggedInUser,
    payload: userData,
  };
};

export const logout = (): AnyAction => {
  return {
    type: actionTypes.logout,
  };
};
