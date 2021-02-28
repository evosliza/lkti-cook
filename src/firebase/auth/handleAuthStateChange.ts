import firebase from "firebase";
import { UserModel } from '../../models/user';

export const handleAuthStateChange = (handler: (user: UserModel | null) => unknown) => {
  firebase.auth().onAuthStateChanged(async (user) => {
    if (!user) {
      handler(null);
      return;
    }

    const userRef = firebase.firestore().collection('users').doc(user?.uid);
    const userInfo = await userRef.get();

    handler(userInfo.data() as UserModel);
  });
};
