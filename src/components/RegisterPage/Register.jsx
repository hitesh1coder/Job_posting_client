import React, { useState } from "react";
import "./Register.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

import AuthImage from "../AuthImage";
import axios from "axios";

const Register = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const navigate = useNavigate();
  const [isacceptTerm, setIsacceptTerm] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const handleCheck = (e) => {
    if (e.target.checked) {
      setIsacceptTerm(true);
    } else {
      setIsacceptTerm(false);
    }
  };

  formValue.terms = isacceptTerm;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formValue.name ||
      !formValue.email ||
      !formValue.mobile ||
      !formValue.password ||
      formValue.terms === false
    ) {
      setError(true);
    } else {
      setError(false);
      console.log(formValue);
      try {
        const config = {
          headers: { "Content-Type": "application/json" },
        };
        const { name, email, mobile, password, terms } = formValue;
        const user = await axios.post(
          "http://localhost:5500/register",
          { name, email, mobile, password, terms },
          config
        );
        const { data } = user;
        localStorage.setItem("user", JSON.stringify(data));
        if (data.status === "failed") {
          toast.warn(`${data.message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
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
        }
        setTimeout(() => {
          navigate("/");
        }, 3000);
        console.log(data);
      } catch (error) {
        console.log(error);
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
      }
    }
  };
  return (
    <div className="wrapper">
      <div className="register_container">
        <div className="register">
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
          <h1>Create an Account</h1>
          <p>Your personal jobfinder is here</p>
          <form className="register_form" onSubmit={handleSubmit}>
            <input
              className="input_box"
              type="name"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={formValue.name}
            />
            <input
              className="input_box"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formValue.email}
            />
            <input
              className="input_box"
              type="number"
              name="mobile"
              placeholder="Mobile"
              onChange={handleChange}
              value={formValue.mobile}
            />
            <input
              className="input_box"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formValue.password}
            />
            <div className="checkbox">
              <input
                type="checkbox"
                name="terms"
                onChange={handleCheck}
                value={isacceptTerm}
              />
              <label htmlFor="terms">
                by creataing an account, I agree to our Term of use and privacy
                policy
              </label>
            </div>
            <p className="error">
              {error ? "* all fields required in the form" : ""}
            </p>
            <button className="register_btn" onSubmit={handleSubmit}>
              {" "}
              Create Account
            </button>
          </form>
          <div className="footer_desc">
            <span>Already have an account ?</span>
            <Link to="/login">Sign In</Link>
          </div>
        </div>
      </div>
      <AuthImage />
    </div>
  );
};

export default Register;
