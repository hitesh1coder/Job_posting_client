import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddJob.css";

import SideImage from "./SideImage";

const AddJob = () => {
  const [formValue, setFormValue] = useState({
    campanyname: "",
    logourl: "",
    position: "",
    salary: "",
    jobtype: "",
    workplace: "",
    location: "",
    jobdesc: "",
    aboutcampany: "",
    skillsArray: [],
  });
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const handleCancle = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValue.campanyname || !formValue.logourl || !formValue.position) {
      setError(true);
    } else {
      setError(false);
      console.log(formValue);
    }
  };
  return (
    <div className="addjob_wrapper">
      <div className="addjob_container">
        <div className="addjob">
          <h1>Add Job Description</h1>
          <form className="addjob_form" onSubmit={handleSubmit}>
            <label className="input_div" htmlFor="campanyname">
              Company Name
              <input
                className="input_box"
                type="text"
                name="campanyname"
                placeholder="Enter Your Campany Name here"
                onChange={handleChange}
                value={formValue.campanyname}
              />
            </label>

            <label className="input_div" htmlFor="logourl">
              Add logo URL
              <input
                className="input_box"
                type="text"
                name="logourl"
                placeholder="Enter the link"
                onChange={handleChange}
                value={formValue.logourl}
              />
            </label>
            <label className="input_div" htmlFor="position">
              Position
              <input
                className="input_box"
                type="text"
                name="position"
                placeholder="Enter jon position"
                onChange={handleChange}
                value={formValue.position}
              />
            </label>
            <label className="input_div" htmlFor="salary">
              Monthly Salary
              <input
                className="input_box"
                type="number"
                name="salary"
                placeholder="Enter Amount in Rupees"
                onChange={handleChange}
                value={formValue.salary}
              />
            </label>
            <label className="input_div" htmlFor="jobtype">
              Job Type
              <select
                name="jobtype"
                id=""
                className="input_option"
                onChange={handleChange}
                value={formValue.jobtype}
              >
                <option value="">Select</option>
                <option value="internship">InternShip</option>
                <option value="full-time">Full-time</option>
              </select>
            </label>
            <label className="input_div" htmlFor="workplace">
              Remote/Office
              <select
                name="workplace"
                className="input_option"
                id=""
                onChange={handleChange}
                value={formValue.workplace}
              >
                <option value="">Select</option>
                <option value="remote">Remote</option>
                <option value="office">Office</option>
              </select>
            </label>
            <label className="input_div" htmlFor="location">
              Location
              <input
                className="input_box"
                type="text"
                name="location"
                placeholder="Enter Location"
                onChange={handleChange}
                value={formValue.location}
              />
            </label>
            <label className="input_div" htmlFor="jobdesc">
              Job Description
              <textarea
                className="input_box"
                name="jobdesc"
                id=""
                cols="30"
                rows="5"
                placeholder="Type the job description"
                onChange={handleChange}
                value={formValue.jobdesc}
              ></textarea>
            </label>
            <label className="input_div" htmlFor="jobdesc">
              About Campany
              <textarea
                className="input_box"
                name="aboutcampany"
                id=""
                cols="30"
                rows="5"
                placeholder="Type about campany "
                onChange={handleChange}
                value={formValue.aboutcampany}
              ></textarea>
            </label>
            <label className="input_div" htmlFor="skills">
              Skills Required
              <input
                className="input_box"
                type="text"
                name="skillsArray"
                placeholder="Enter the must have skills with comma seperated"
                onChange={handleChange}
                value={formValue.skillsArray}
              />
            </label>
            <p className="error">
              {error ? "* all fields required in the form" : ""}
            </p>
            <div className="btns">
              <button className="cancle_btn" onSubmit={handleCancle}>
                Cancle
              </button>
              <button className="addjob_btn" onSubmit={handleSubmit}>
                {" "}
                +Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
      <SideImage />
    </div>
  );
};

export default AddJob;
