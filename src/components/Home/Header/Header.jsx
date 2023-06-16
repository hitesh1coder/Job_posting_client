import React, { useEffect, useState } from "react";
import "./Header.css";
import userImage from "../../../images/userAvator.jpg";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const logoutUser = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="header">
      <Link to="/">
        <h2>Jobfinder</h2>
      </Link>
      {user ? (
        <div className="user_details">
          <p onClick={logoutUser}>Logout</p>
          <p>Hello! {user.recruiterName} </p>
          <img src={userImage} alt="userImage" />
        </div>
      ) : (
        <div className="nav">
          <Link to="/login">
            <button className="login_btn">Login</button>
          </Link>
          <Link to="/register">
            <button className="register_btn">Register</button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
