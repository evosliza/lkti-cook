import { combineReducers } from 'redux';

import { authReducer } from './auth.reducer';
import { recipeReducer } from './recipe.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  recipes: recipeReducer,
});

export default rootReducer;
