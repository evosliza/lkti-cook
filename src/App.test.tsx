import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';
import MainRoutes from './pages/MainRoutes';
import { firebaseService } from './firebase';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(() => mockDispatch),
}));

const mockHandleAuthStateChange = jest.fn();
firebaseService.handleAuthStateChange = mockHandleAuthStateChange;

describe('<App />', () => {
  let mockUseDispatch: jest.Mock;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    mockUseDispatch = jest.requireMock('react-redux').useDispatch;
    wrapper = shallow(<App />);
  })

  test('renders MainRoutes', () => {
    expect(wrapper.find(MainRoutes)).toBeTruthy();
  });

  test('handles mockHandleAuthStateChange', () => {
    expect(mockUseDispatch).toBeCalled();
    expect(mockHandleAuthStateChange).toBeCalled();

    // todo: check if the handler of authStateChange is dispatching the right thing
  });
})
