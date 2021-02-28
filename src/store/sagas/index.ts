import { all, takeEvery } from 'redux-saga/effects';
import actionTypes from '../action-types';
import { logoutSaga } from './logout.saga';
import { registerSaga } from './register.saga';
import { loginSaga } from './login.saga';
import { createRecipeSaga } from './create-recipe.saga';
import { fetchRecipeListSaga } from './fetch-recipe-list.saga';

export const rootSaga = function* () {
  yield all([
    takeEvery(actionTypes.register, registerSaga),
    takeEvery(actionTypes.login, loginSaga),
    takeEvery(actionTypes.logout, logoutSaga),
    takeEvery(actionTypes.createRecipe, createRecipeSaga),
    takeEvery(actionTypes.fetchRecipeList, fetchRecipeListSaga),
  ]);
};
