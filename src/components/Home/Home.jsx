import React from "react";
import "./Home.css";
import Header from "./Header/Header";

import MainSection from "./MainSection/MainSection";
const Home = () => {
  return (
    <div className="home_container">
      <Header />
      <div className="jobs_container">
        <MainSection />
      </div>
    </div>
  );
};

export default Home;
