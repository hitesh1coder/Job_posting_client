import React from "react";
import Authimage from "../images/authImage.png";
import "../App.css";

const AuthImage = () => {
  return (
    <div className="container">
      <h1 className="auth_heading">Your Personal Job Finder</h1>
      <img className="auth_img" src={Authimage} alt="authImage" />
    </div>
  );
};

export default AuthImage;
