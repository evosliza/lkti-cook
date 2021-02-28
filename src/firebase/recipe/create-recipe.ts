import firebase from 'firebase';
import { RecipeModel } from '../../models/recipe';
import { UserModel } from '../../models/user';

export const createRecipe = async (user: UserModel, recipe: RecipeModel): Promise<RecipeModel> => {
  const recipeRef = firebase.firestore()
  .collection('users').doc(user.uid)
  .collection('recipes').doc();

  await recipeRef.set({
    ...recipe,
    uid: recipeRef.id,
  });

  return recipe;
};
