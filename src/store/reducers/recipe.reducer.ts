import produce from 'immer';
import { AnyAction, Reducer } from 'redux';
import actionTypes from '../action-types';
import { RecipeModel } from '../../models/recipe';

export interface RecipesState {
  recipeList: RecipeModel[] | null;
}

const defaultState: RecipesState = {
  recipeList: null,
};

export const recipeReducer: Reducer<RecipesState> = (recipesState = defaultState, action: AnyAction | null = null) => {
  if (!action) {
    return defaultState;
  }

  return produce(recipesState, (draft) => {
    switch (action.type) {
      case actionTypes.setRecipeList:
        draft.recipeList = action.payload;
        break;
      case actionTypes.addRecipeToList:
        draft.recipeList?.push(action.payload);
        break;
      default:
        return draft;
    }
  });
};
