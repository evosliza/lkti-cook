import React from 'react';
import { Avatar, PageHeader } from 'antd';
import RecipeList from './RecipeList';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../store/selectors';
import Button from 'antd/lib/button';

import './home.scss';
import actions from '../store/actions';

const Home = () => {
  const dispatch = useDispatch();

  const user = useSelector(getUser)!;

  const handleLogout = () => {
    dispatch(actions.logout());
  };

  return (
    <div className="main-content">
      <PageHeader
        className="site-page-header"
        backIcon={false}
        subTitle="Welcome to lkti-Cook"
      >
        <div className="header-content">
          <div className="user-info">
            <Avatar className="avatar">{user.displayName.charAt(0).toUpperCase()}</Avatar>
            <div className="user-name">{user.displayName}</div>
          </div>

          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </PageHeader>

      <RecipeList />
    </div>
  );
};

export default Home;
