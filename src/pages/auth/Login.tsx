import React from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import { useDispatch } from 'react-redux';
import actions from '../../store/actions';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { Credentials } from '../../firebase/auth/login';

const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = (credentials: Credentials) => {
    dispatch(actions.login(credentials));
  };

  return (
    <div className="auth-container">
      <Card style={{ width: 600 }}>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          name="basic"
          onFinish={onSubmit}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!'
              }
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
                message: 'Please input your password!'
              }
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button htmlType="submit">Login</Button>
          </Form.Item>
        </Form>

        <div>
          <Link to="/register">Go to Register</Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
