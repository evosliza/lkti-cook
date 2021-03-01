import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Avatar } from 'antd';
import RecipeList from '../../components/recipe-list/RecipeList';
import Home from './Home';
import Button from 'antd/lib/button';
import actions from '../../store/actions';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('<Home />', () => {
  const myMockUserDisplayName = 'Mock User Display Name';

  let mockUseDispatch: jest.Mock;
  let mockUseSelector: jest.Mock;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    mockUseSelector = jest.requireMock('react-redux').useSelector;
    mockUseDispatch = jest.requireMock('react-redux').useDispatch;

    mockUseSelector.mockReturnValue({ displayName: myMockUserDisplayName });
    mockUseDispatch.mockReturnValue(mockDispatch);

    wrapper = shallow(<Home />);
  })

  test('renders user info in header', () => {
    wrapper = shallow(<Home />);

    expect(wrapper.find(Avatar).text()).toEqual(myMockUserDisplayName.charAt(0).toUpperCase());
    expect(wrapper.find('.user-name').text()).toEqual(myMockUserDisplayName);
  });

  test('renders recipe list', () => {
    expect(wrapper.find(RecipeList)).toBeTruthy();
  });

  test('should logout on logout button click', () => {
    const button = wrapper.find(Button);

    expect(mockUseDispatch).toBeCalled();

    button.simulate('click');
    expect(mockDispatch).toBeCalledWith(actions.logout());
  });
})
