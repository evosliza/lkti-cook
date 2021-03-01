import React from 'react';
import { useDispatch } from 'react-redux';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';

import './auth.scss';
import actions from '../../store/actions';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();

  const onSubmit = (user: any) => {
    dispatch(actions.register(user));
  };

  const onError = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="auth-container">
      <Card style={{width: 600}}>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          name="basic"
          onFinish={onSubmit}
          onFinishFailed={onError}
        >
          <Form.Item
            label="Display name"
            name="displayName"
            rules={[
              {
                required: true,
                message: 'Please input your display name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
              wrapperCol={{ offset: 8, span: 16 }}
          >
            <Button htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>

        <div>
          <Link to="/login">Go to Login</Link>
        </div>
      </Card>
    </div>
  )
};

export default Register;
