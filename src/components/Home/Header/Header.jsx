import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <h2>Jobfinder</h2>
      <div className="nav">
        <Link to="/login">
          <button className="login_btn">Login</button>
        </Link>
        <Link to="/register">
          <button className="register_btn">Register</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
