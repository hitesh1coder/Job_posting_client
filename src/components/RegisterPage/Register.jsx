import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import AuthImage from "../AuthImage";

const Register = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formValue.name ||
      !formValue.email ||
      !formValue.password ||
      !formValue.password
    ) {
      setError(true);
    } else {
      setError(false);
      console.log(formValue);
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
              <input type="checkbox" name="terms" />
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
            <Link to="/">Sign In</Link>
          </div>
        </div>
      </div>
      <AuthImage />
    </div>
  );
};

export default Register;
