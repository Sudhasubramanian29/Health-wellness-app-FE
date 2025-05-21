import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("userId"); // ❌ remove user session
    navigate("/login"); // 🔁 redirect to login
  }, [navigate]);

  return null; // or show a spinner/loading screen
};

export default Logout;
