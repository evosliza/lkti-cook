import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Form from 'antd/lib/form';
import Register from './Register';
import actions from '../../store/actions';
import { UserModel } from '../../models/user';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

const userInfo: Pick<UserModel, 'email' | 'password' | 'displayName'> = {
  email: 'mock-testing@mailinator.com',
  password: 'secret',
  displayName: 'motck-testing-user'
}

describe('<Register />', () => {
  let mockUseDispatch: jest.Mock;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    mockUseDispatch = jest.requireMock('react-redux').useDispatch;

    mockUseDispatch.mockReturnValue(mockDispatch);

    wrapper = shallow(<Register />);
  })

  test('form should have form', () => {
    expect(wrapper.find(Form)).toBeTruthy();
  });

  test('should have link to navigate to login page', () => {
    expect(wrapper.find('Link[to="login"]')).toBeTruthy();
  });

  test('should register on register button click', () => {
    const form = wrapper.find(Form);

    expect(mockUseDispatch).toBeCalled();

    form.simulate('finish', userInfo);
    expect(mockDispatch).toBeCalledWith(actions.register(userInfo as UserModel));
  });

  test('form to have email, password and displayName', () => {
    const form = wrapper.find(Form);

    expect(form.find('Form.Item[name="email"]')).toBeTruthy();
    expect(form.find('Form.Item[name="password"]')).toBeTruthy();
    expect(form.find('Form.Item[name="displayName"]')).toBeTruthy();
  });
})
