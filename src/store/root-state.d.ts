import { AuthState } from './reducers/auth.reducer';
import { RecipesState } from './reducers/recipe.reducer';

export interface RootState {
  auth: AuthState;
  recipes: RecipesState
}
