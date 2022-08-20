import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";
import "../styles/Contact.css";
import { Space, Table } from "antd";
import { HeartFilled, HeartOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import * as http from "../http";
import { contactType } from "../interface/contactType";
import { setContactData } from "../redux/contactSlice";
import ProtectedRoutes from "../routes/ProtectedRoutes";
import { sortContact } from "../utils/sortContacts";

const { Column } = Table;

const Contacts = () => {
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
      image: contact.photo,
      favourite: contact.is_favourite,
    };
    return dataObj;
  });

  useEffect(() => {
    if (dataDeletion || favourite) {
      (async () => {
        let arrData = await http.getContacts();

        dispatch(setContactData(sortContact(arrData)));

        setDataDeletion(false);
        setFavourite(false);
      })();
    }
  }, [dataDeletion, favourite]);


  const handleDelete = async (key: number) => {
    try {
      setDataDeletion(true);
      await http.deleteContact(key);
      data = data.filter((item: any) => {
        return item.key !== key;
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleFavourite = async (favourite: boolean, object: any) => {
    try {
      setFavourite(true);
      const formData = new FormData();
      formData.append("is_favourite", !object.favourite + "");
      await http.updateContact(object.key, formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <ProtectedRoutes/>
      <Table dataSource={data} pagination={false} className='contact-table'>
        <Column
          title={<p className="table-header"></p>}
          dataIndex="favourite"
          className = "column-favourite"
          key="key"
          render={(favourite: boolean, object: contactType, index) => {
            return (
              <div 
                onClick={() => handleFavourite(favourite, object)}
              >
                {favourite ? (
                  <HeartFilled style={{ color: "red", cursor: "pointer" }} className='ant-icon'/>
                ) : (
                  <HeartOutlined style={{ color: "grey", cursor: "pointer" }} className='ant-icon'/>
                )}
              </div>
            );
          }}
        />

        <Column
          title={<p className="table-header">PROFILE</p>}
          dataIndex="image"
          className = "column-photo"
          key="image"
          render={(pic) => <img src={pic} className="avatar" />}
          align='center'
        />

        <Column
          title={<p className="table-header">NAME</p>}
          dataIndex="name"
          key="name"
          align='center'
          className='table-cell'
        />
        <Column
          title={<p className="table-header">PHONE</p>}
          dataIndex="phone"
          key="phone"
          align='center'
          className='table-cell'
        />
        <Column
          title={<p className="table-header">EMAIL</p>}
          dataIndex="email"
          key="email"
          align='center'
          className='table-cell'
        />
        <Column
          title={<p className="table-header">ADDRESS</p>}
          dataIndex="address"
          key="address"
          align='center'
          className='table-cell'
        />

        <Column
          title={<p className="table-header"></p>}
          key="action"
          dataIndex="key"
          align='left'
          render={(key) => (
            <Space size="small">
              <Link to={`${key}/editContact`}>
                <a style={{}}><EditOutlined style={{color: 'green'}} className='ant-icon'/></a>
              </Link>
              <a onClick={() => {handleDelete(key);}}>
              <DeleteOutlined style={{color: 'red'}} className='ant-icon'/>
              </a>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default Contacts;
