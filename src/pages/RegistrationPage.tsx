import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RegistrationPage.css'

const RegistrationPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='register-main-container'>   
    <div className="left-register">
      <p className='welcome-register'>WELCOME TO</p>
      <p className='contact-register'>Contact Manager System</p>
      <hr className='ruler-register'/>
      <p className='message-register'>Register to Access Dashboard</p>
    </div> 
    <Form
      name="basic"
      labelCol={{ span: 9 }}
      wrapperCol={{ span: 14 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className='register-form'
    >
      <div className="register-heading">
        <h1>REGISTER</h1>
      </div>
      <Form.Item
        label= {<h3>USERNAME</h3>}
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
        className="labels-register"
      >
        <Input className='input-register'/>
      </Form.Item>

      <Form.Item
        label={<h3>PASSWORD</h3>}
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        className="labels-register"
      >
        <Input.Password className='input-register'/>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 7, span: 22 }}>
        <Button type="primary" htmlType="submit" className='register-btn'>
          <p>REGISTER</p> 
        </Button>
        <Link to="/Login" className='register-link'>REGISTERED USER? LOGIN</Link>
      </Form.Item>
    </Form>
    </div>
  );
};

export default RegistrationPage;