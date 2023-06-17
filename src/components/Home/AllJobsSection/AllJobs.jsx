import React from "react";
import "./AllJobs.css";
import logo from "../../../images/campany3.jpg";
import groupIcon from "../../../images/icons8-group-50.png";
import rupeeIcon from "../../../images/icons8-rupee-24.png";
import flagIcon from "../../../images/icons8-indian-flag-64.png";
import { useNavigate } from "react-router-dom";

const AllJobs = ({ job }) => {
  const navigate = useNavigate();
  const openJobDetails = async () => {
    navigate("/detail", {
      state: job,
    });
  };

  return (
    <div className="main_container">
      <div className="job_conatiner ">
        <div className="logo">
          <img src={job ? job.logourl : logo} alt="logo" />
        </div>
        <div className="job_desc">
          <div className="job_position">
            <h3>{job?.position}</h3>
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
              {job?.salary}
            </p>
            <p>
              {" "}
              <span>
                <img className="icon_img" src={flagIcon} alt="" />
              </span>
              {job?.location}
            </p>
          </div>
          <div className="job_type">
            <p>{job?.jobtype}</p>
            <p>{job?.workplace}</p>
          </div>
        </div>
        <div className="job_details">
          <div className="skills">
            {job?.skillsArray?.map((skill, i) => {
              return (
                <p key={i} className="skill">
                  {skill}
                </p>
              );
            })}
          </div>

          <button className="details_btn" onClick={openJobDetails}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
