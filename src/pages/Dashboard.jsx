import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Dashboard = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const res = await axios.get(`http://localhost:5000/api/fitness/${userId}`);
        setLogs(res.data);
      } catch (err) {
        console.error("Failed to fetch logs", err);
      }
    };
    fetchLogs();
  }, []);

  const labels = logs.map((log) => {
    if (!log.date) return "Unknown";
    const d = new Date(log.date);
    return isNaN(d) ? "Invalid" : d.toLocaleDateString("en-IN", { day: "2-digit", month: "short" });
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Calories Burned",
        data: logs.map((log) => log.calories || 0),
        borderColor: "#6366f1",
        backgroundColor: "rgba(99, 102, 241, 0.1)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#6366f1",
        pointBorderColor: "#fff",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-100 to-indigo-200 py-12 pt-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-extrabold text-indigo-700 flex items-center gap-3">
              <svg className="w-7 h-7 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 2a1 1 0 0 0-2 0v2.05A7.002 7.002 0 0 0 5.05 11H3a1 1 0 1 0 0 2h2.05A7.002 7.002 0 0 0 11 18.95V21a1 1 0 1 0 2 0v-2.05A7.002 7.002 0 0 0 18.95 13H21a1 1 0 1 0 0-2h-2.05A7.002 7.002 0 0 0 13 5.05V2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" />
              </svg>
              Wellness Dashboard
            </h2>
          </div>

          <div className="bg-indigo-50 p-6 rounded-xl shadow-inner">
            <h3 className="text-lg font-semibold text-indigo-600 mb-4">Calories Burned Over Time</h3>
            <div className="w-full" style={{ height: "50vh" }}>
              <Line data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
