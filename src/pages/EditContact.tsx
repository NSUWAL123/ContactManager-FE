import React from 'react'
import AddContactForm from '../components/AddContactForm'
import "../styles/EditContact.css"

const EditContact = () => {
  return (
    <div className="container-main-edit">
        <h1>Edit Contact</h1>
        <AddContactForm/>
    </div>
  )
}

export default EditContact