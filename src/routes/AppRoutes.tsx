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
import ProtectedRoutes from "./ProtectedRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />


        <Route path="/" element={<BaseLayout />}>
          <Route path="contacts/" element={<Contacts />} />
          <Route path="contacts/addContact" element={<AddContact />} />
          <Route path="contacts/:id/editContact" element={<EditContact />} />


          <Route path="*" element={<PageNotAvailable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
