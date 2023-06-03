import Register from "./components/RegisterPage/Register";
import "./App.css";
import AuthImage from "./components/AuthImage";
import Login from "./components/LoginPage/Login";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
