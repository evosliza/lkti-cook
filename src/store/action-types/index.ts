import authActionTypes from './auth.action-types';
import recipeActionTypes from './recipe.action-types';

const actionTypes = {
  ...authActionTypes,
  ...recipeActionTypes
};

export default actionTypes;
