import React from "react";
import { Link } from "react-router-dom";
import HomeComponent from "../components/HomeComponent";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-main-container">
      <div className="home-left">
        <HomeComponent />
        <div className="home-link-wrap">
          <Link to="/Contacts">
            <p>View Contacts</p>
          </Link>
          <Link to="/AddContact">
            <p>Add Contact</p>
          </Link>
        </div>
      </div>

      <div className="home-link-right">
        <Link to="/Login">
          <p className="logout-link">Logout</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
