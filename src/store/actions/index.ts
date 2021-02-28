import * as authActions from './auth.actions';
import * as recipeActions from './recipe.actions';

const actions = {
  ...authActions,
  ...recipeActions
};

export default actions;
