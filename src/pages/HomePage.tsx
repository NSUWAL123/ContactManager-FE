import React from "react";
import { Link } from "react-router-dom";
import HomeComponent from "../components/HomeComponent";
import ProtectedRoutes from "../routes/ProtectedRoutes";
import "../styles/HomePage.css";
import { removeUserFromLocalStorage } from "../utils/handleToken";

const HomePage = () => {

  const logoutUser = () => {
    removeUserFromLocalStorage();
  }

  return (
    <div className="home-main-container">
      <ProtectedRoutes/>
      <div className="home-left">
        <HomeComponent />
        <div className="home-link-wrap">
          <Link to="/contacts">
            <p>View Contacts</p>
          </Link>
          <Link to="/contacts/AddContact">
            <p>Add Contact</p>
          </Link>
        </div>
      </div>

      <div className="home-link-right">
        <div className="logout-link-wrap">
          <Link to="/login" onClick={logoutUser}>
            <p className="logout-link">Logout</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
