import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "../AddJobPage/AddJob.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideImage from "../AddJobPage/SideImage";

const UpdateJob = () => {
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
    skills: [],
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const id = location.state;
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const getData = async () => {
    try {
      const result = await axios.get(
        `https://node-capstone.onrender.com/job/${id}`
      );
      const { data } = result;
      if (data) {
        setFormValue(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handleCancle = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formValue.campanyname ||
      !formValue.logourl ||
      !formValue.position ||
      !formValue.salary ||
      !formValue.jobtype ||
      !formValue.workplace ||
      !formValue.location ||
      !formValue.jobdesc ||
      !formValue.aboutcampany
    ) {
      setError(true);
    } else {
      setError(false);
      try {
        const config = {
          headers: { "Content-Type": "application/json", token: token },
        };
        const {
          campanyname,
          logourl,
          position,
          salary,
          jobtype,
          workplace,
          location,
          jobdesc,
          aboutcampany,
          skills,
        } = formValue;
        const updateJob = await axios.put(
          `http://localhost:5500/job/${id}`,
          {
            campanyname,
            logourl,
            position,
            salary,
            jobtype,
            workplace,
            location,
            jobdesc,
            aboutcampany,
            skills,
          },
          config
        );
        const { data } = await updateJob;
        toast.success(`${data.message}`, {
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
          navigate("/");
        }, 3000);
      } catch (error) {
        if (error.request.status === 500) {
          toast.error(`${error.response.data.message}`, {
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
            navigate("/");
          }, 3000);
        }
        console.log(error);
      }
    }
  };
  return (
    <div className="addjob_wrapper">
      <div className="addjob_container">
        <div className="addjob">
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
          <h1>Update This Job Description</h1>
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
                name="skills"
                placeholder="Enter the must Required skills"
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
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      <SideImage />
    </div>
  );
};

export default UpdateJob;
