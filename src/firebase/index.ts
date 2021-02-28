import firebase from 'firebase';
import { firebaseConfig } from './firebase.config';

import { login } from './auth/login';
import { register } from './auth/register';
import { logout } from './auth/logout';
import { handleAuthStateChange } from './auth/handleAuthStateChange';
import { createRecipe } from './recipe/create-recipe';
import { fetchRecipeList } from './recipe/fetch-recipe-list';

firebase.initializeApp(firebaseConfig);

export const firebaseService = {
  register,
  login,
  logout,
  handleAuthStateChange,
  createRecipe,
  fetchRecipeList,
};
