import React from "react";
import Sideimage from "../../images/WallpaperDog-20567151 1.png";
import "../../App.css";

const SideImage = () => {
  return (
    <div className="img_container">
      <h1 className="auth_heading">Your Personal Job Finder</h1>
      <img className="auth_img" src={Sideimage} alt="authImage" />
    </div>
  );
};

export default SideImage;
