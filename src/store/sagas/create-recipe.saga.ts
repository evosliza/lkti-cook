import { AnyAction } from 'redux';
import { put, call, select } from 'redux-saga/effects';
import actions from '../actions';
import { firebaseService } from '../../firebase';
import { RecipeModel } from '../../models/recipe';
import { getUser } from '../selectors';
import { UserModel } from '../../models/user';

export const createRecipeSaga = function* (action: AnyAction) {
  const user = (yield select(getUser)) as UserModel;
  const recipe = (yield call(async () => firebaseService.createRecipe(user, action.payload))) as RecipeModel;

  yield put(actions.addRecipeToList(recipe));
};
