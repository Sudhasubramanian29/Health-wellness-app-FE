import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users/register", form);
      alert("Registered successfully");
      navigate("/login");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-extrabold mb-6 text-indigo-700 text-center">
          Create your account
        </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
  <input
    type="text"
    placeholder="Name"
    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
    onChange={(e) => setForm({ ...form, name: e.target.value })}
    required
  />
  <input
    type="email"
    placeholder="Email"
    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
    onChange={(e) => setForm({ ...form, email: e.target.value })}
    required
  />
  <input
    type="password"
    placeholder="Password"
    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
    onChange={(e) => setForm({ ...form, password: e.target.value })}
    required
  />

  <button
    type="submit"
    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl shadow-md transition"
  >
    Register
  </button>

  {/* ✅ Added Below */}
  <div className="text-center text-sm mt-4">
    Already have an account?{" "}
    <span
      className="text-indigo-600 hover:underline cursor-pointer"
      onClick={() => navigate("/login")}
    >
      Login here
    </span>
  </div>
</form>

      </div>
    </div>
  );
};

export default Register;
