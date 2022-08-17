import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/BaseLayout.css";
import logo from "../pictures/logo.svg";

const BaseLayout = () => {
  return (
    <div className="base-layout">
      <Link to="/" className="base-heading">
        <img src={logo} alt="" />
        <h1>CMS</h1>
      </Link>
      <hr />
      <Outlet />
    </div>
  );
};

export default BaseLayout;
