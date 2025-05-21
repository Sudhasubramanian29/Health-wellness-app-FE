import React, { useState } from "react";
import axios from "axios";
import { FaRunning, FaClock, FaRoad, FaFire } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const FitnessForm = () => {
  const [form, setForm] = useState({
    type: "",
    duration: "",
    distance: "",
    calories: "",
  });

  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");

    if (!userId) {
      setShowLoginPopup(true);
      setTimeout(() => setShowLoginPopup(false), 3000);
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/fitness", { ...form, userId });
      setForm({ type: "", duration: "", distance: "", calories: "" });
      toast.success("✅ Fitness data added successfully!");
    } catch (err) {
      toast.error("❌ Failed to add fitness data.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 via-blue-200 to-purple-200 px-4 relative overflow-hidden">
      <ToastContainer />

      {/* Popup for login */}
      {showLoginPopup && (
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-red-200 text-red-800 px-6 py-3 rounded-xl shadow-md animate-bounce z-50 font-medium">
          ⚠️ Please login to add a fitness log.
        </div>
      )}

      {/* Glass card */}
      <div className="w-full max-w-md bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl p-8 shadow-2xl">
        <h2 className="text-3xl font-extrabold text-white mb-8 text-center drop-shadow">
          🏋️ Add Your Fitness Log
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <FaRunning className="absolute left-4 top-4 text-green-700" />
            <input
              type="text"
              placeholder="Activity Type (e.g., Running)"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/70 placeholder-green-600 text-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md"
            />
          </div>

          <div className="relative">
            <FaClock className="absolute left-4 top-4 text-green-700" />
            <input
              type="number"
              placeholder="Duration (minutes)"
              value={form.duration}
              onChange={(e) => setForm({ ...form, duration: e.target.value })}
              required
              min="0"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/70 placeholder-green-600 text-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md"
            />
          </div>

          <div className="relative">
            <FaRoad className="absolute left-4 top-4 text-green-700" />
            <input
              type="number"
              placeholder="Distance (km) - optional"
              value={form.distance}
              onChange={(e) => setForm({ ...form, distance: e.target.value })}
              min="0"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/70 placeholder-green-600 text-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md"
            />
          </div>

          <div className="relative">
            <FaFire className="absolute left-4 top-4 text-green-700" />
            <input
              type="number"
              placeholder="Calories burned - optional"
              value={form.calories}
              onChange={(e) => setForm({ ...form, calories: e.target.value })}
              min="0"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/70 placeholder-green-600 text-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 transition text-white font-semibold py-3 rounded-xl shadow-xl hover:scale-105 duration-300"
          >
            ➕ Add Fitness Log
          </button>
        </form>
      </div>
    </div>
  );
};

export default FitnessForm;
