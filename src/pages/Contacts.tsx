import { Space, Table } from "antd";
import { useEffect, useState } from "react";
import "../styles/Contact.css";
import * as http from "../http";
import { useDispatch, useSelector } from "react-redux";
import { setContactData } from "../redux/contactSlice";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { contactType } from "../Domain/contactType";

const { Column } = Table;

type Props = {};

const Contacts = (props: Props) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contactReducer.data);
  const [dataDeletion, setDataDeletion] = useState<boolean>(true);
  const [favourite, setFavourite] = useState<boolean>(true);

  let data = contacts.map((contact) => {
    const dataObj = {
      key: contact.id,
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      address: contact.address,
      photo: contact.photo,
      favourite: contact.is_favourite,
    };
    return dataObj;
  });

  const handleDelete = async (key: number) => {
    try {
      //handle delete
    } catch (err) {
      console.log(err);
    }
  };

  const handleFavourite = async (favourite: boolean, object: any) => {
    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Table dataSource={data} pagination={false}>
        <Column
          title={<p className="table-header">Favourite</p>}
          dataIndex="favourite"
          key="favourite"
          render={(favourite: boolean, object: contactType, index) => {
            return (
              <div
                className="favourite-container"
                onClick={() => handleFavourite(favourite, object)}
              >
                {favourite ? (
                  <HeartFilled style={{ color: "red" }} />
                ) : (
                  <HeartOutlined />
                )}
              </div>
            );
          }}
        />

        <Column
          title={<p className="table-header">Photo</p>}
          dataIndex="image"
          key="image"
          render={(pic) => <img src={pic} className="profile-img" />}
        />

        <Column
          title={<p className="table-header">Name</p>}
          dataIndex="name"
          key="name"
        />
        <Column
          title={<p className="table-header">Phone</p>}
          dataIndex="phone"
          key="phone"
        />
        <Column
          title={<p className="table-header">Email</p>}
          dataIndex="email"
          key="email"
        />
        <Column
          title={<p className="table-header">Address</p>}
          dataIndex="address"
          key="address"
        />

        <Column
          title={<p className="table-header">Action</p>}
          key="action"
          dataIndex="key"
          render={(key) => (
            <Space size="small">
              <Link to={`${key}/edit-contact`}>
                <a className="edit-link">Edit</a>
              </Link>

              <a
                className="delete-link"
                onClick={() => {
                  handleDelete(key);
                }}
              >
                Delete
              </a>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default Contacts;
