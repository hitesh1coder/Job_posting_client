import React, { useState } from "react";
import "./Register.css";
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
        navigate("/");
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="wrapper">
      <div className="register_container">
        <div className="register">
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
