import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";   // ✅ Correct import
import MainPage from "./Components/MainPage"; // ✅ Correct path
import Login from "./Components/Login";       // ✅ Correct path
import Signup from "./Components/Signup";     // ✅ Correct path

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<MainPage />} /> {/* ✅ Added */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

