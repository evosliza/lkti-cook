import firebase from 'firebase';

export interface Credentials {
  email: string;
  password: string;
}

export const login = async (credentials: Credentials) => {
  const response = await firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);

  const userRef = firebase.firestore().collection('users').doc(response.user?.uid);

  const user = await userRef.get();

  return user.data();
};
