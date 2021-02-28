import actionTypes from '../action-types';
import { AnyAction } from 'redux';
import { RecipeModel } from '../../models/recipe';

export const fetchRecipeList = (): AnyAction => {
  return {
    type: actionTypes.fetchRecipeList,
  };
};

export const addRecipeToList = (recipe: RecipeModel): AnyAction => {
  return {
    type: actionTypes.addRecipeToList,
    payload: recipe,
  };
};

export const setRecipeList = (recipes: RecipeModel[] | null): AnyAction => {
  return {
    type: actionTypes.setRecipeList,
    payload: recipes,
  };
};

export const createRecipe = (recipe: RecipeModel): AnyAction => {
  return {
    type: actionTypes.createRecipe,
    payload: recipe,
  };
};
