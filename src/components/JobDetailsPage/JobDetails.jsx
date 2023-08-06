import React from "react";
import "./JobDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Home/Header/Header";
import stipend from "../../images/stipend.png";
import duration from "../../images/duration.png";

const JobDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const jobData = location.state;
  const id = jobData._id;

  const user = JSON.parse(localStorage.getItem("user"));

  const editJobHandler = async () => {
    if (user) {
      navigate("/update-job", {
        state: id,
      });
    } else {
      toast.error("You have to register or login first to make changes", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    }
  };

  return (
    <>
      <Header />
      <div className="jobs_container">
        <div className="job_post">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <h2>
            {jobData.position} {jobData.workplace} {jobData.jobtype}{" "}
            job/internship at {jobData.campanyname}
          </h2>
        </div>
        <div className="job_description">
          <div className="time">
            <p>
              <span>1w ago</span> . {jobData.jobtype}
            </p>
          </div>
          <div className="job_position">
            <h1>{jobData.position}</h1>
            <button className="edit_btn" onClick={editJobHandler}>
              Edit Job
            </button>
          </div>
          <div className="location">
            <p>{jobData.location}</p>
            <p>India</p>
          </div>
          <div className="basic_details">
            <div className="detail_heading">
              <p>
                <span>
                  <img src={stipend} alt="stipend" />
                </span>{" "}
                stipend
              </p>
              <p>
                {" "}
                <span>
                  <img src={duration} alt="duration" />
                </span>{" "}
                duration
              </p>
            </div>
            <div className="detail_value">
              <p>Rs {jobData.salary}/month</p>
              <p>6 months</p>
            </div>
          </div>
          <div className="about_company">
            <h3>About Company</h3>
            <p>{jobData.aboutcampany}</p>
          </div>
          <div className="about_jobs">
            <h3>About Job/Internship</h3>
            <p>{jobData.jobdesc}</p>
          </div>
          <div className="skills_section">
            <h3>Skill(s) Required</h3>
            <div className="skills">
              {jobData?.skillsArray?.map((skill, i) => {
                return (
                  <p key={i} className="skill">
                    {skill}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="additional_info">
            <h3>Additional Information</h3>
            <p>
              Stipend structure: This is a performance-based internship. In
              addition to the minimum-assured stipend, you will also be paid a
              performance-linked incentive (₹ 2500 per design).
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
