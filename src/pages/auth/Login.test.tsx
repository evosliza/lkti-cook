import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Login from './Login';
import Form from 'antd/lib/form';
import actions from '../../store/actions';
import { Credentials } from '../../firebase/auth/login';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('<Login />', () => {
  let mockUseDispatch: jest.Mock;
  let wrapper: ShallowWrapper;

  const mockCredentials: Credentials = {
    email: 'mock-testing@mailinator.com',
    password: 'secret'
  }

  beforeEach(() => {
    mockUseDispatch = jest.requireMock('react-redux').useDispatch;

    mockUseDispatch.mockReturnValue(mockDispatch);

    wrapper = shallow(<Login />);
  })

  test('form should have form', () => {
    expect(wrapper.find(Form)).toBeTruthy();
  });

  test('should have link to navigate to register page', () => {
    expect(wrapper.find('Link[to="register"]')).toBeTruthy();
  });

  test('should login when login form is submitted', () => {
    const form = wrapper.find(Form);

    expect(mockUseDispatch).toBeCalled();

    form.simulate('finish', mockCredentials);
    expect(mockDispatch).toBeCalledWith(actions.login(mockCredentials));
  });

  test('form to have email and password', () => {
    const form = wrapper.find(Form);

    expect(form.find('Form.Item[name="email"]')).toBeTruthy();
    expect(form.find('Form.Item[name="password"]')).toBeTruthy();
  });
})
