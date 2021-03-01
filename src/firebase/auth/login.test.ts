import { Credentials, login } from './login';
import { UserModel } from '../../models/user';

type Mock = jest.Mock;

jest.mock('firebase', () => {
  const overallMock = {
    auth: jest.fn(),
    firestore: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
    collection: jest.fn(),
    doc: jest.fn(),
    get: jest.fn(),
    data: jest.fn(),
  };

  return overallMock;
});

const credentials: Credentials = {
  email: 'mock-testing@mailinator.com',
  password: 'secret',
}
const userInfo: UserModel = {
  uid: 'mock-uid',
  email: 'mock-testing@mailinator.com',
  password: 'secret',
  displayName: 'mock-testing-user'
}

describe('firebaseService.login()', () => {
  let overallMock: Record<string, Mock>;

  beforeEach(() => {
    overallMock = jest.requireMock('firebase');

    Object.values(overallMock).forEach((fn) => fn.mockReturnValue(overallMock));
    overallMock.signInWithEmailAndPassword.mockReturnValue({ user: { uid: userInfo.uid } })
    overallMock.data.mockReturnValue(userInfo);

    login(credentials);
  })

  test('calls firebase.auth().signInWithEmailAndPassword()', () => {
    expect(overallMock.auth).toBeCalled();
    expect(overallMock.signInWithEmailAndPassword).toBeCalledWith(credentials.email, credentials.password);
  });

  test('gets the user info from firestore/users', () => {
    expect(overallMock.firestore).toBeCalled();
    expect(overallMock.collection).toBeCalledWith('users');
    expect(overallMock.doc).toBeCalledWith(userInfo.uid);
    expect(overallMock.get).toBeCalled();
    expect(overallMock.data).toBeCalled();
  });
})
