import React, { useState, useEffect } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Form, Input, Button, Upload, Switch } from "antd";
import "../styles/AddContactForm.css";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import * as http from "../http";

const AddContactForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [form] = Form.useForm();
  const [isAdd, setIsAdd] = useState<boolean | null>();

  useEffect(() => {
    if ("/contacts/AddContact" === location.pathname) {
      form.setFieldsValue({ is_favourite: false });
      setIsAdd(true);
    } else {
      (async () => {
        const contactId = params.id;
        const data = await http.getContact(contactId);

        form.setFieldsValue({
          name: data.name,
          phone: data.phone,
          email: data.email,
          address: data.address,
          is_favourite: data.is_favourite,
        });
      })();
      setIsAdd(false);
    }
  }, []);

  const onFinish = async (values: any) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("phone", values.phone);
    formData.append("email", values.email);
    formData.append("address", values.address);
    formData.append("is_favourite", values.is_favourite);

    if (isAdd) {
      formData.append("photo", values.photo.file.originFileObj);
      try {
        await http.addContact(formData);
      } catch (err) {
        console.log(err);
      }
    } else {
      values.photo?.file.originFileObj &&
        formData.append("photo", values.photo.file.originFileObj);
      try {
        await http.updateContact(params.id, formData);
      } catch (err) {
        console.log(err);
      }
    }
    navigate("/contacts");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="add-contact-main">
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        layout="horizontal"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="name"
          label={<h3>Name</h3>}
          rules={[{ required: true }]}
        >
          <Input className="add-contact-input" placeholder="Full Name" />
        </Form.Item>
        <Form.Item
          name="phone"
          label={<h3>Phone</h3>}
          rules={[{ required: true }]}
        >
          <Input
            className="add-contact-input"
            placeholder="Primary Phone Number"
            type="number"
          />
        </Form.Item>
        <Form.Item
          name="email"
          label={<h3>Email</h3>}
          rules={[{ required: true }]}
        >
          <Input
            className="add-contact-input"
            placeholder="Personal Email"
            type="email"
          />
        </Form.Item>
        <Form.Item
          name="address"
          label={<h3>Address</h3>}
          rules={[{ required: true }]}
        >
          <Input
            className="add-contact-input"
            placeholder="Permanent Address"
          />
        </Form.Item>

        {isAdd ?
          <Form.Item label={<h3>Upload Photo</h3>} name="photo" rules={[{ required: true }]}>
          <Upload maxCount={1}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item> :

        <Form.Item label={<h3>Upload Photo</h3>} name="photo">
        <Upload maxCount={1}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        </Form.Item>
        }

        <Form.Item
          name="is_favourite"
          label={<h3>Favourite</h3>}
          valuePropName="checked"
        >
          <Switch checked={false} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
          <Button htmlType="submit" className="addcontact-submit-btn">
            <p>{isAdd ? "Create Contact" : "Edit Contact"}</p>
          </Button>
          {isAdd ? (
            <Link to="/" className="add-contact-no">
              No
            </Link>
          ) : (
            <Link to="/contacts" className="add-contact-no">
              No
            </Link>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddContactForm;
