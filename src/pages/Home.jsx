import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import bg1 from "../assets/image1.avif";
import bg2 from "../assets/img2.jpg";
import bg3  from "../assets/img3.jpg";
import bg4 from "../assets/image3.jpg";


const images = [bg1, bg2, bg3, bg4];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat relative transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          Welcome to WellnessApp
        </h1>
        <p className="text-lg text-gray-200 mb-6 max-w-xl leading-relaxed">
          One app for your fitness, nutrition, and wellness tracking journey.
        </p>
            <div className="flex space-x-6">
  <Link to="/login">
    <button className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-full backdrop-blur-sm shadow-lg hover:bg-white hover:text-black transition duration-300">
      Login
    </button>
  </Link>
  <Link to="/register">
    <button className="px-6 py-3 bg-white/20 text-white font-semibold rounded-full backdrop-blur-sm shadow-lg hover:bg-white hover:text-black transition duration-300">
      Register
    </button>
  </Link>
</div>


      </div>
    </div>
  );
};

export default Home;
