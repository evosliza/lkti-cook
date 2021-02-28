import firebase from 'firebase';

import { login } from './auth/login';
import { register } from './auth/register';
import { logout } from './auth/logout';

import { firebaseConfig } from './firebase.config';

firebase.initializeApp(firebaseConfig);

export const firebaseService = {
  register,
  login,
  logout,
};
