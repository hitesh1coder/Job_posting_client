import React from "react";
import "./AllJobs.css";
import logo from "../../../images/campany3.jpg";
import groupIcon from "../../../images/icons8-group-50.png";
import rupeeIcon from "../../../images/icons8-rupee-24.png";
import flagIcon from "../../../images/icons8-indian-flag-64.png";
import { Link } from "react-router-dom";

const AllJobs = () => {
  return (
    <div className="main_container">
      <div className="job_conatiner ">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="job_desc">
          <div className="job_position">
            <h3>Frontend Developer</h3>
          </div>
          <div className="about_job">
            <p>
              <span>
                <img className="icon_img" src={groupIcon} alt="" />
              </span>
              11-50
            </p>
            <p>
              {" "}
              <span>
                <img className="icon_img" src={rupeeIcon} alt="" />
              </span>
              50,000
            </p>
            <p>
              {" "}
              <span>
                <img className="icon_img" src={flagIcon} alt="" />
              </span>
              delhi
            </p>
          </div>
          <div className="job_type">
            <p>office</p>
            <p>full time</p>
          </div>
        </div>
        <div className="job_details">
          <div className="skills">
            <p className="skill">Frontend</p>
            <p className="skill">CSS</p>
            <p className="skill">JavaScript</p>
            <p className="skill">Node</p>
          </div>
          <Link to="/detail">
            <button className="details_btn">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
