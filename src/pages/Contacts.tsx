import { Space, Table } from "antd";
import "../styles/Contact.css";
import * as http from "../http";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { contactType } from "../Domain/contactType";

const { Column } = Table;

type Props = {};

const Contacts = (props: Props) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contactReducer.data);

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
              <Link to={`${key}/editContact`}>
                <a>Edit</a>
              </Link>

              <a
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
