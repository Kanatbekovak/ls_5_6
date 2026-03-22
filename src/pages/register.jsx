import React from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/auth-store';


export function Register() {

    const {register,registerPending} = useAuthStore()
    const onFinish =(values) => {
        register(values)
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
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

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
      <Button type="primary" htmlType="submit" disabled={registerPending}>
        Submit
      </Button>
    </Form.Item>

    <p>I was here <Link to={'/login'}>Login</Link></p>
  </Form>

  )
};
