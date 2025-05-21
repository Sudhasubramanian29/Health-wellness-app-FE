import React, { useState } from "react";
import axios from "axios";
import {
  FaAppleAlt,
  FaFireAlt,
  FaDrumstickBite,
  FaBreadSlice,
  FaTint,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NutritionForm = () => {
  const [form, setForm] = useState({
    food: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    if (!userId) {
      toast.error("🔒 Please login to add nutrition logs!");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/nutrition", { ...form, userId });
      toast.success("✅ Nutrition log added successfully!");
      setForm({ food: "", calories: "", protein: "", carbs: "", fat: "" });
    } catch (err) {
      toast.error("❌ Error adding nutrition log. Please try again.");
    }
  };

  const icons = {
    food: <FaAppleAlt className="text-green-600" />,
    calories: <FaFireAlt className="text-red-500" />,
    protein: <FaDrumstickBite className="text-yellow-600" />,
    carbs: <FaBreadSlice className="text-orange-500" />,
    fat: <FaTint className="text-purple-600" />,
  };

  return (
    <>
      {/* Toast messages */}
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar newestOnTop />

      <div className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-br from-green-100 via-yellow-100 to-pink-100 px-4 relative overflow-hidden">
        <div className="w-full max-w-md bg-white/30 backdrop-blur-lg border border-white/40 rounded-3xl p-10 shadow-2xl">
          <h2 className="text-3xl font-extrabold text-green-700 mb-10 text-center">
            🍽️ Add Nutrition Log
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {Object.entries(form).map(([key, value]) => (
              <div className="relative" key={key}>
                <span className="absolute left-4 top-3 text-lg">{icons[key]}</span>
                <input
                  type={key === "food" ? "text" : "number"}
                  placeholder={
                    key === "food"
                      ? "Food Item"
                      : `${key.charAt(0).toUpperCase() + key.slice(1)} (g)`
                  }
                  value={value}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  required={key === "food"}
                  min={key !== "food" ? "0" : undefined}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/70 placeholder-green-600 text-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md"
                />
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 transition text-white font-semibold py-3 rounded-xl shadow-xl hover:scale-105 duration-300"
            >
              ➕ Add Nutrition Log
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NutritionForm;
