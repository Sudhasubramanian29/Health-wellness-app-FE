import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        fill="none"
        viewBox="0 0 24 24"
        className="text-white"
      >
        <path
          fill="#3B82F6"
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.46 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.46 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
        <path
          stroke="#fff"
          strokeWidth="2"
          d="M6 13l2.5-3 2 2.5L13 10l2.5 3H18"
        />
      </svg>
      <span className="text-xl md:text-2xl font-bold tracking-wide text-white">
        WellnessApp
      </span>
    </div>
  );
};

export default Logo;
