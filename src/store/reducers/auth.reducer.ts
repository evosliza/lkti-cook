import produce from 'immer';
import { AnyAction, Reducer } from 'redux';
import { UserModel } from '../../models/user';
import actionTypes from '../../constants';

export interface AuthState {
  user: UserModel | null;
}

const defaultState: AuthState = {
  user: null,
};

export const authReducer: Reducer<AuthState> = (authState = defaultState, action: AnyAction | null = null) => {
  if (!action) {
    return defaultState;
  }

  return produce(authState, (draft) => {
    switch (action.type) {
      case actionTypes.setLoggedInUser:
        draft.user = action.payload;
        break;
      default:
        return draft;
    }
  });
};
