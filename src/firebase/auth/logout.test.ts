import { logout } from './logout';

type Mock = jest.Mock;

jest.mock('firebase', () => {
  const authMock = {
    auth: jest.fn(),
    signOut: jest.fn(),
  };

  return authMock;
});

describe('firebaseService.logout()', () => {
  let authMock: Record<string, Mock>;

  beforeEach(() => {
    authMock = jest.requireMock('firebase');

    Object.values(authMock).forEach((fn) => fn.mockReturnValue(authMock));

    logout();
  })

  test('calls firebase.auth().signOut()', () => {
    expect(authMock.auth).toBeCalled();
    expect(authMock.signOut).toBeCalled();
  });
})
