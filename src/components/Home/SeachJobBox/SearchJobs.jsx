import React, { useState } from "react";
import Select from "react-select";
import "./SearchJobs.css";

const SearchJobs = () => {
  const options = [
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "JS", label: "JS" },
    { value: "NODE", label: "NODE" },
  ];
  const [select, setSelect] = useState([]);
  const [selectPlaceholder, setSelectPlaceholder] = useState("Skills");

  const handleSelect = (e) => {
    e.map((info) => {
      setSelect((prev) => [...prev, info.value]);
    });
  };
  return (
    <div className="container_div">
      <div className="search_container">
        <div className="search_box">
          <input
            type="text"
            placeholder="Type any Job title"
            className="input_search"
          />
        </div>
        <div className="select_options">
          <Select
            className="form-select"
            options={options}
            placeholder={selectPlaceholder}
            onChange={handleSelect}
            isMulti
          />
          <p>clear</p>
        </div>
      </div>
    </div>
  );
};

export default SearchJobs;
