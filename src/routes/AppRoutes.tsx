import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "../components/BaseLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import PageNotAvailable from "../pages/PageNotAvailable";
import AddContact from "../pages/AddContact";
import Contacts from "../pages/Contacts";
import EditContact from "../pages/EditContact";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="contacts/" element={<Contacts />} />
          <Route path="contacts/addContact" element={<AddContact />} />
          <Route path="contacts/editContact" element={<EditContact />} />
          <Route path="*" element={<PageNotAvailable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
