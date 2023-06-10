import React from "react";
import "./Home.css";
import Header from "./Header/Header";
import SearchJobs from "./SeachJobBox/SearchJobs";
import AllJobs from "./AllJobsPage/AllJobs";
const Home = () => {
  return (
    <div className="home_container">
      <Header />
      <div className="jobs_container">
        <SearchJobs />
        <AllJobs />
        <AllJobs />
        <AllJobs />
        <AllJobs />
        <AllJobs />
        <AllJobs />
      </div>
    </div>
  );
};

export default Home;
