import Register from "./components/RegisterPage/Register";
import "./App.css";

import Login from "./components/LoginPage/Login";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import JobDetails from "./components/JobDetailsPage/JobDetails";
import AddJob from "./components/AddJobPage/AddJob";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail" element={<JobDetails />} />
          <Route path="/addjob" element={<AddJob />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
