import React from 'react';
import { shallow } from 'enzyme';
import MainRoutes from './MainRoutes';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('<MainRoutes />', () => {
  let mockUseSelector: jest.Mock;

  beforeEach(() => {
    mockUseSelector = jest.requireMock('react-redux').useSelector;
  })

  test('renders login and register routes when not logged in', () => {
    mockUseSelector.mockReturnValue(false);
    const wrapper = shallow(<MainRoutes />);
    expect(wrapper.find('Route[path="/login"]')).toHaveLength(1);
    expect(wrapper.find('Route[path="/register"]')).toHaveLength(1);
  });

  test('renders home route when logged in', () => {
    mockUseSelector.mockReturnValue(true);
    const wrapper = shallow(<MainRoutes />);
    expect(wrapper.find('Route[path="/home"]')).toHaveLength(1);
  });
})
