import { put, call, select } from 'redux-saga/effects';
import actions from '../actions';
import { firebaseService } from '../../firebase';
import { RecipeModel } from '../../models/recipe';
import { getUser } from '../selectors';
import { UserModel } from '../../models/user';

export const fetchRecipeListSaga = function* () {
  const user = (yield select(getUser)) as UserModel;
  const recipes = (yield call(async () => firebaseService.fetchRecipeList(user))) as RecipeModel[];

  yield put(actions.setRecipeList(recipes));
};
