import React from 'react'
import AddContactForm from '../components/AddContactForm'
import contact_img from "../pictures/Contacts.svg";
import ProtectedRoutes from '../routes/ProtectedRoutes';

const AddContact = () => {
  return (
    <div>
      <ProtectedRoutes/>
      <div className="add-contact-head">
        <img src={contact_img} alt="" />
        <h1>ADD CONTACT</h1>
      </div>
      <AddContactForm/>
    </div>
  )
}

export default AddContact
