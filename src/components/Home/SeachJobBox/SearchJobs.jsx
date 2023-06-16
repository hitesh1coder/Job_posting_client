import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./SearchJobs.css";
import axios from "axios";
import AllJobs from "../AllJobsPage/AllJobs";

const SearchJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchJob, setSearchJob] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const skillsOption = ["React", "HTML", "CSS", "JavaScript", "FrontEnd"];

  const userSelectedSkills = selectedSkills.toString().toLowerCase();
  const removeSkill = (index) => {
    setSelectedSkills([
      ...selectedSkills.slice(0, index),
      ...selectedSkills.slice(index + 1),
    ]);
  };
  const clearSkills = () => {
    setSelectedSkills([]);
  };
  const fetchAllJobs = async () => {
    try {
      const AllJobs = await axios.get(`http://localhost:5500/jobs`, {
        params: { skills: userSelectedSkills },
      });
      const { data } = AllJobs;
      setJobs(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAllJobs();
  }, [selectedSkills, searchJob]);
  const handleSearch = (e) => {
    if (e.target.value === "") {
      setJobs(jobs);
      return;
    } else {
      const filterBySearch = jobs.filter((item) => {
        if (
          item.position.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          return item;
        }
      });
      setJobs(filterBySearch);
    }
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
                    <span onClick={() => removeSkill(i)}>+</span>
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
      {jobs?.map((job, i) => {
        return <AllJobs key={i} job={job} />;
      })}
    </>
  );
};

export default SearchJobs;
