import { UserModel } from '../../models/user';
import { handleAuthStateChange } from './handleAuthStateChange';

type Mock = jest.Mock;

jest.mock('firebase', () => {
  const overallMock = {
    auth: jest.fn(),
    firestore: jest.fn(),
    onAuthStateChanged: jest.fn(),
    collection: jest.fn(),
    doc: jest.fn(),
    get: jest.fn(),
    data: jest.fn(),
  };

  return overallMock;
});

const userInfo: UserModel = {
  uid: 'mock-uid',
  email: 'mock-testing@mailinator.com',
  password: 'secret',
  displayName: 'mock-testing-user'
}

describe('firebaseService.handleAuthStateChange()', () => {
  let overallMock: Record<string, Mock>;

  const handler = jest.fn();

  beforeEach(() => {
    overallMock = jest.requireMock('firebase');

    Object.values(overallMock).forEach((fn) => fn.mockReturnValue(overallMock));
    overallMock.onAuthStateChanged.mockImplementation((fn) => fn({ uid: userInfo.uid }))
    overallMock.data.mockReturnValue(userInfo);

    handleAuthStateChange(handler);
  })

  test('calls firebase.auth().onAuthStateChanged()', () => {
    expect(overallMock.auth).toBeCalled();
    expect(overallMock.onAuthStateChanged).toBeCalled();
  });

  test('gets the user info from firestore/users', () => {
    expect(overallMock.firestore).toBeCalled();
    expect(overallMock.collection).toBeCalledWith('users');
    expect(overallMock.doc).toBeCalledWith(userInfo.uid);
    expect(overallMock.get).toBeCalled();
    expect(overallMock.data).toBeCalled();
  });

  test('calls given handler with userInfo', () => {
    expect(handler).toBeCalledWith(userInfo);
  });
})
