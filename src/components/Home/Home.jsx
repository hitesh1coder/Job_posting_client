import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "./Header/Header";
import SearchJobs from "./SeachJobBox/SearchJobs";

import axios from "axios";
const Home = () => {
  return (
    <div className="home_container">
      <Header />
      <div className="jobs_container">
        <SearchJobs />
      </div>
    </div>
  );
};

export default Home;
