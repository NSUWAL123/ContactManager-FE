import React, { useState } from "react";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Form, Input, Button, Upload, Switch } from "antd";
import "../styles/AddContactForm.css";
import contact_img from "../pictures/Contacts.svg";
import { Link, useNavigate } from "react-router-dom";
import * as http from "../http";

type Props = {};

const AddContactForm = (props: Props) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  function onPhotoUpload(info: any) {
    console.log("Photo uploaded");
  }

  const onFinish = async (values: any) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("phone", values.phone);
    formData.append("email", values.email);
    formData.append("address", values.address);
    formData.append("photo", values.picture.file.originFileObj);
    formData.append("is_favourite", values.favourite);

    navigate("/contacts");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="add-contact-main">
      <div className="add-contact-head">
        <img src={contact_img} alt="" />
        <h1>ADD CONTACT</h1>
      </div>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        layout="horizontal"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="Name"
          label={<h3>Name</h3>}
          rules={[{ required: true }]}
        >
          <Input className="add-contact-input" placeholder="Full Name" />
        </Form.Item>
        <Form.Item
          name="Phone"
          label={<h3>Phone</h3>}
          rules={[{ required: true }]}
        >
          <Input
            className="add-contact-input"
            placeholder="Primary Phone Number"
          />
        </Form.Item>
        <Form.Item
          name="Email"
          label={<h3>Email</h3>}
          rules={[{ required: true }]}
        >
          <Input className="add-contact-input" placeholder="Personal Email" />
        </Form.Item>
        <Form.Item
          name="Address"
          label={<h3>Address</h3>}
          rules={[{ required: true }]}
        >
          <Input
            className="add-contact-input"
            placeholder="Permanent Address"
          />
        </Form.Item>

        <Form.Item
          label={<h3>Upload Photo</h3>}
          name="picture"
          rules={[{ required: true }]}
        >
          <Upload maxCount={1} onChange={onPhotoUpload}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="favourite"
          label={<h3>Favourite</h3>}
          valuePropName="checked"
        >
          <Switch checked={false} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
          <Button htmlType="submit" className="addcontact-submit-btn">
            <p className="addcontact-submit-p">CREATE CONTACT</p>
          </Button>
          <Link to="/" className="add-contact-no">
            No
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddContactForm;
