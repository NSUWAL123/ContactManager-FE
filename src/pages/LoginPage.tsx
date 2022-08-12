import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import '../styles/LoginPage.css'

const LoginPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='login-main-container'>   
    <div className="left-login">
      <p className='welcome-login'>WELCOME TO</p>
      <p className='contact-login'>Contact Manager System</p>
      <hr className='ruler-login'/>
      <p className='message-login'>Login to Access Dashboard</p>
    </div> 
    <Form
      name="basic"
      labelCol={{ span: 9 }}
      wrapperCol={{ span: 14 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className='login-form'
    >
      <div className="login-heading">
        <h1>LOGIN</h1>
      </div>
      <Form.Item
        label= {<h3>USERNAME</h3>}
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
        className="labels-login"
      >
        <Input className='input-login'/>
      </Form.Item>

      <Form.Item
        label={<h3>PASSWORD</h3>}
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        className="labels-login"
      >
        <Input.Password className='input-login'/>
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 9, span: 16 }}>
        <Checkbox><p>Remember me</p></Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 7, span: 22 }}>
        <Button type="primary" htmlType="submit" className='login-btn'>
          <p>LOGIN</p> 
        </Button>
    <a className='register-link'>CREATE MY ACCOUNT</a>
      </Form.Item>
    </Form>
        {/* <link className='register-btn'>
          <a>CREATE MY ACCOUNT</a> 
        </link> */}
    </div>
  );
};

export default LoginPage;