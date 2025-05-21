import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const location = useLocation();
  const userId = localStorage.getItem("userId"); 
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = (path) =>
    `block px-4 py-2 rounded hover:bg-blue-400 transition ${
      location.pathname === path ? "bg-blue-300" : ""
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-700 text-white px-6 py-4 shadow z-50">
      <div className="flex justify-between items-center">
        
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

       
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        
        <div className="hidden md:flex space-x-2 text-sm md:text-base items-center">
          <Link to="/dashboard" className={linkClasses("/dashboard")}>
            Dashboard
          </Link>
          <Link to="/fitness/add" className={linkClasses("/fitness/add")}>
            Add Fitness
          </Link>
          <Link to="/nutrition/add" className={linkClasses("/nutrition/add")}>
            Add Nutrition
          </Link>
          {userId && (
            <Link
              to="/logout"
              className="ml-4 px-4 py-2 rounded hover:bg-blue-400 transition"
            >
              Logout
            </Link>
          )}
        </div>
      </div>

    
      {menuOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-2">
          <Link to="/dashboard" className={linkClasses("/dashboard")} onClick={() => setMenuOpen(false)}>
            Dashboard
          </Link>
          <Link to="/fitness/add" className={linkClasses("/fitness/add")} onClick={() => setMenuOpen(false)}>
            Add Fitness
          </Link>
          <Link to="/nutrition/add" className={linkClasses("/nutrition/add")} onClick={() => setMenuOpen(false)}>
            Add Nutrition
          </Link>
          {userId && (
            <Link to="/logout" className="px-4 py-2 rounded hover:bg-blue-400 transition" onClick={() => setMenuOpen(false)}>
              Logout
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
