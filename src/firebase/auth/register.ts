import firebase from 'firebase';
import { UserModel } from '../../models/user';
import { jsonClone } from '../../utils/jsonClone';

export const register = async (user: UserModel): Promise<UserModel> => {
  const response = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password!);

  const userRef = firebase.firestore().collection('users').doc(response.user!.uid);

  const userData = {
    ...user,
    uid: response.user!.uid,
    password: null
  };

  await userRef.set(jsonClone(userData));

  return userData;
};
