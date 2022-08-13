import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Upload,
} from 'antd';
import '../styles/AddContactForm.css'
import contact_img from '../pictures/Contacts.svg'
import { Link } from 'react-router-dom';

const AddContactForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='add-contact-main'>
      <div className="add-contact-head">
        <img src={contact_img} alt=""/>
        <h1>ADD CONTACT</h1>
      </div>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        layout="horizontal"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item name="Name" label={<h3>Name</h3>} rules={[{ required: true }]}>
          <Input className='add-contact-input' placeholder='Full Name'/>
        </Form.Item>
        <Form.Item name="Phone" label={<h3>Phone</h3>} rules={[{ required: true }]}>
          <Input className='add-contact-input' placeholder='Primary Phone Number'/>
        </Form.Item>
        <Form.Item name="Email" label={<h3>Email</h3>} rules={[{ required: true }]}>
          <Input className='add-contact-input' placeholder='Personal Email'/>
        </Form.Item>
        <Form.Item name="Address" label={<h3>Address</h3>} rules={[{ required: true }]}>
          <Input className='add-contact-input' placeholder='Permanent Address'/>
        </Form.Item>
        <Form.Item name="Upload" label={<h3>Upload</h3>} valuePropName="fileList" rules={[{ required: true }]}>
          <Upload action="/upload.do" listType="picture-card">
              <PlusOutlined />
          </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
          <Button htmlType="submit" className='addcontact-submit-btn'><p className='addcontact-submit-p'>CREATE CONTACT</p></Button>
          <Link to="/" className='add-contact-no'>No</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddContactForm;