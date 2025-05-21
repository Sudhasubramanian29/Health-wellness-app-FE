import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import FitnessForm from "./pages/FitnessForm";
import NutritionForm from "./pages/NutritionForm";
import Home from "./pages/Home";
import Logout from "./pages/Logout";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/fitness/add" element={<FitnessForm />} />
        <Route path="/nutrition/add" element={<NutritionForm />} />
      </Routes>
    </div>
  );
};

export default App;
