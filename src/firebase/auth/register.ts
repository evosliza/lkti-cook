import firebase from 'firebase';
import { UserModel } from '../../models/user';

export const register = async (user: UserModel): Promise<UserModel> => {
  const response = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password!);

  const userRef = firebase.firestore().collection('users').doc(response.user?.uid);

  const userData = {
    ...user,
    password: null
  };

  await userRef.set(userData);

  return userData;
};
