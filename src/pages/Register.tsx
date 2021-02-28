import React from 'react';
import { useDispatch } from 'react-redux';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import 'antd/dist/antd.css';

import './auth.scss';
import actions from '../store/actions';

const Register = () => {
  const dispatch = useDispatch();

  const onFinish = (user: any) => {
    dispatch(actions.register(user));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="auth-container">
      <div className="register-form">
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
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
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
};

export default Register;
