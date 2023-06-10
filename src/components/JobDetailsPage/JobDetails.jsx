import React from "react";
import "./JobDetails.css";
import Header from "../Home/Header/Header";
import stipend from "../../images/stipend.png";
import duration from "../../images/duration.png";
const JobDetails = () => {
  return (
    <>
      <Header />
      <div className="job_container">
        <div className="job_post">
          <h2>
            WordPress Development work from home job/intership at Adyaka Infosek
            Private Limited
          </h2>
        </div>
        <div className="job_description">
          <div className="time">
            <p>
              <span>1w ago</span> . FullTime
            </p>
          </div>
          <div className="job_position">
            <h1>WordPress Development</h1>
            <button className="edit_btn">Edit Job</button>
          </div>
          <div className="location">
            <p>Banglore</p>
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
              <p>Rs 25000/month</p>
              <p>6 months</p>
            </div>
          </div>
          <div className="about_company">
            <h3>About Company</h3>
            <p>
              We provide technology-based services to help businesses and
              organizations achieve their goals. We offer a wide range of
              services, including software development, system integration,
              network and security services, cloud computing, and data
              analytics. Our primary focus is on leveraging technology to
              streamline business processes, improve productivity, and enhance
              overall efficiency.
            </p>
          </div>
          <div className="about_jobs">
            <h3>About Job/Internship</h3>
            <p>
              We are looking for a responsible PHP/WordPress/Laravel/Shopify
              Developer. He/She will be liable for managing services and
              therefore the interchange of knowledge between the server and the
              users. The candidate's primary focus is going to be the event of
              all server-side logic, definition, and maintenance of the central
              database and ensuring high performance and responsiveness to
              requests from the front end.
            </p>
            <div className="responsibility">
              Selected intern's day-to-day responsibilities include:
              <ol>
                <li>
                  {" "}
                  Work on the development of theme customization, liquid
                  programming language, and corresponding apps
                </li>
                <li>
                  {" "}
                  Implement system integrations that are crucial to our success
                </li>
                <li>
                  {" "}
                  Contribute to the development of HTML5/CSS/JavaScript and
                  standard web technologies integral to building seamless
                  multi-channel experiences
                </li>
                <li>
                  Work on speed optimization and making a mobile-friendly
                  website
                </li>
              </ol>
            </div>
          </div>
          <div className="skills_section">
            <h3>skill(s) required</h3>
            <div className="skills">
              <p>CSS</p>
              <p>JavaScript</p>
              <p>WordPress</p>
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
