import React from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/auth-store';


export function Login() {
    const {login,loginPending} = useAuthStore()

    const onFinish =(values) => {
        login(values)
    }
  return (
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}

    autoComplete="off"
  >

    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please input your Email!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

     <Form.Item label={null}>
      <Button type="primary" htmlType="submit" disabled={loginPending}>
        Submit
      </Button>
    </Form.Item>

    <p>I wasn't here <Link to={'/register'}>Register</Link></p>
  </Form>
  )
};
