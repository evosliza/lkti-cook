import { Credentials, login } from './login';
import { UserModel } from '../../models/user';
import { register } from './register';

type Mock = jest.Mock;

jest.mock('firebase', () => {
  const overallMock = {
    auth: jest.fn(),
    firestore: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
    collection: jest.fn(),
    doc: jest.fn(),
    set: jest.fn(),
  };

  return overallMock;
});

const userInfo: UserModel = {
  uid: 'mock-uid',
  email: 'mock-testing@mailinator.com',
  password: null,
  displayName: 'mock-testing-user'
}

const userRegistrationData: Pick<UserModel, 'email' | 'password'| 'displayName'> = {
  email: userInfo.email,
  password: 'secret',
  displayName: userInfo.displayName,
}

describe('firebaseService.register()', () => {
  let overallMock: Record<string, Mock>;

  beforeEach(() => {
    overallMock = jest.requireMock('firebase');

    Object.values(overallMock).forEach((fn) => fn.mockReturnValue(overallMock));
    overallMock.createUserWithEmailAndPassword.mockReturnValue({ user: { uid: userInfo.uid } })

    register(userRegistrationData as UserModel);
  })

  test('calls firebase.auth().createUserWithEmailAndPassword()', () => {
    expect(overallMock.auth).toBeCalled();
    expect(overallMock.createUserWithEmailAndPassword).toBeCalledWith(userRegistrationData.email, userRegistrationData.password);
  });

  test('sets the user info to the firestore/users', () => {
    expect(overallMock.firestore).toBeCalled();
    expect(overallMock.collection).toBeCalledWith('users');
    expect(overallMock.doc).toBeCalledWith(userInfo.uid);
    expect(overallMock.set).toBeCalledWith(userInfo);
  });
})
