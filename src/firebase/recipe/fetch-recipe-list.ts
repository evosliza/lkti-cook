import firebase from 'firebase';
import { RecipeModel } from '../../models/recipe';
import { UserModel } from '../../models/user';

export const fetchRecipeList = async (user: UserModel, ): Promise<RecipeModel[]> => {
  const recipeList = await firebase.firestore()
  .collection('users').doc(user.uid)
  .collection('recipes').get();

  return recipeList.docs.map((doc) => doc.data() as RecipeModel);
};
