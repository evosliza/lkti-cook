import { RootState } from './root-state';

export const getUser = (state: RootState) => state.auth.user;
export const getIsLoggedIn = (state: RootState) => !!state.auth.user;

export const getRecipeList = (state: RootState) => state.recipes.recipeList;
