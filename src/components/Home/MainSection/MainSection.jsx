import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MainSection.css";
import axios from "axios";
import AllJobs from "../AllJobsSection/AllJobs";
import LoadingSkeletain from "./LoadingSkeletain";

const MainSection = () => {
  const [jobs, setJobs] = useState([]);
  const [searchJob, setSearchJob] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const skillsOption = ["React", "HTML", "CSS", "JavaScript", "FrontEnd"];

  const userSelectedSkills = selectedSkills.toString().toLowerCase();
  const removeSkill = (index) => {
    setSelectedSkills([...selectedSkills.filter((_, i) => i !== index)]);
  };
  const clearSkills = () => {
    setSelectedSkills([]);
  };
  const fetchAllJobs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://node-capstone.onrender.com/jobs`,
        {
          params: { skills: userSelectedSkills },
        }
      );
      setJobs(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllJobs();
  }, [selectedSkills, searchJob]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    if (searchTerm === "") {
      setSearchJob(jobs);
      return;
    }

    const filteredJobs = jobs.filter((item) => {
      const position = item.position.toLowerCase();
      return position.includes(searchTerm.toLowerCase());
    });

    setJobs(filteredJobs);
  };

  return (
    <>
      <div className="container_div">
        <div className="search_container">
          <div className="search_box">
            <input
              type="text"
              placeholder="Type any Job title"
              className="input_search"
              onChange={handleSearch}
            />
          </div>
          <div className="select_options">
            <select
              className="form-select"
              onChange={(e) => {
                if (!selectedSkills.includes(e.target.value)) {
                  setSelectedSkills([...selectedSkills, e.target.value]);
                }
              }}
            >
              <option>Skills</option>
              {skillsOption.map((skill, i) => {
                return (
                  <option key={i} value={skill}>
                    {skill}
                  </option>
                );
              })}
            </select>
            <div className="selected_skills">
              {selectedSkills?.map((skill, i) => {
                return (
                  <div key={i} className="skills_div">
                    <p>{skill}</p>
                    <span onClick={() => removeSkill(i)}>*</span>
                  </div>
                );
              })}
            </div>
            {user ? (
              <div className="addjobOption">
                <Link to="addjob">
                  <button className="add_btn">+Add Job</button>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
          <p className="clear_skills" onClick={clearSkills}>
            clear
          </p>
        </div>
      </div>
      {loading ? (
        <LoadingSkeletain />
      ) : (
        jobs?.map((job, i) => {
          return <AllJobs loading={loading} key={i} job={job} />;
        })
      )}
    </>
  );
};

export default MainSection;
